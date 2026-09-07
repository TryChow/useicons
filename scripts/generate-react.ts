/**
 * Generates the React icon/illustration components from source SVGs.
 *
 * - Icons   (data/icons/{outline,filled}) -> src/icons/*.tsx
 *   Hardcoded fills/strokes are rewritten to `currentColor`; each component
 *   accepts a `weight?: 'outline' | 'filled'` prop.
 * - Illustrations (data/illustrations)    -> src/illustrations/*.tsx
 *   Multi-color fills, strokes and gradients are preserved verbatim.
 *
 * A barrel file is emitted at packages/icons-react/src/index.ts.
 */
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transform, type Config } from '@svgr/core';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const dataRoot = path.join(repoRoot, 'data');
const reactSrcRoot = path.join(repoRoot, 'packages', 'icons-react', 'src');

const WEIGHTS = ['outline', 'filled'] as const;
type Weight = (typeof WEIGHTS)[number];

interface ParsedSvg {
  viewBox: string;
  body: string;
}

interface SvgFile {
  stem: string;
  file: string;
}

/* ------------------------------------------------------------------ */
/* Naming helpers                                                      */
/* ------------------------------------------------------------------ */

function stemOf(fileName: string): string {
  return fileName.replace(/\.svg$/i, '');
}

function toPascalCase(stem: string): string {
  return stem
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/** Output file name convention inside src/: kebab-case. */
function toKebabCase(stem: string): string {
  return stem
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase();
}

/* ------------------------------------------------------------------ */
/* SVGR / SVGO pipeline                                                */
/* ------------------------------------------------------------------ */

/**
 * SVGO custom plugin rewriting every concrete fill/stroke to `currentColor`
 * so icons can be tinted through CSS at runtime. Gradient references and
 * `none` are left untouched.
 */
const currentColorPlugin = {
  name: 'zag-current-color',
  fn: () => ({
    element: {
      enter: (node: { attributes?: Record<string, string | null> }) => {
        const attributes = node.attributes;
        if (!attributes) return;
        for (const key of ['fill', 'stroke'] as const) {
          const value = attributes[key];
          if (
            typeof value === 'string' &&
            value.trim() !== '' &&
            value !== 'none' &&
            !value.startsWith('url(')
          ) {
            attributes[key] = 'currentColor';
          }
        }
      },
    },
  }),
};

function svgoConfig(iconLike: boolean): Record<string, unknown> {
  return {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: { overrides: { removeViewBox: false } },
      },
      ...(iconLike ? [currentColorPlugin] : []),
    ],
  };
}

async function compileSvg(source: string, iconLike: boolean): Promise<ParsedSvg> {
  const options = {
    // @svgr/core v8 no longer loads any plugins by default.
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
    typescript: true,
    jsxRuntime: 'classic',
    prettier: false,
    svgo: true,
    dimensions: false,
    ref: false,
    titleProp: false,
    expandProps: 'end',
    svgoConfig: svgoConfig(iconLike),
  } satisfies Partial<Config> as Config;

  const code = await transform(source, options);

  const openStart = code.indexOf('<svg');
  if (openStart === -1) {
    throw new Error('SVGR output did not contain an <svg> element.');
  }
  const openEnd = code.indexOf('>', openStart);
  if (openEnd === -1) {
    throw new Error('Malformed <svg> tag in SVGR output.');
  }
  const endTag = code.lastIndexOf('</svg>');
  if (endTag === -1 || endTag < openEnd) {
    throw new Error('Missing </svg> closing tag in SVGR output.');
  }

  const openTag = code.slice(openStart, openEnd + 1);
  const viewBox = /viewBox\s*=\s*"([^"]+)"/.exec(openTag)?.[1];
  if (!viewBox) {
    throw new Error(`Could not resolve viewBox from SVGR output:\n${openTag}`);
  }

  const rawBody = code.slice(openEnd + 1, endTag).trim();
  // Re-indent the extracted JSX so generated files stay readable.
  const body = rawBody
    .split('\n')
    .map((line) => (line.trim() === '' ? '' : `      ${line.trim()}`))
    .join('\n');

  return { viewBox, body };
}

/* ------------------------------------------------------------------ */
/* File discovery                                                      */
/* ------------------------------------------------------------------ */

async function listSvgFiles(dir: string): Promise<SvgFile[]> {
  try {
    const entries = await readdir(dir);
    return entries
      .filter((entry) => entry.toLowerCase().endsWith('.svg'))
      .sort()
      .map((file) => ({ stem: stemOf(file), file }));
  } catch {
    return [];
  }
}

/* ------------------------------------------------------------------ */
/* Templates                                                           */
/* ------------------------------------------------------------------ */

function indentBody(body: string): string {
  return body
    .split('\n')
    .map((line) => line)
    .join('\n');
}

function iconTemplate(params: {
  pascalName: string;
  kebabName: string;
  viewBox: string;
  bodies: Record<Weight, ParsedSvg>;
}): string {
  const { pascalName, kebabName, viewBox, bodies } = params;
  return `/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/${kebabName}.svg

import { forwardRef, type ReactElement } from 'react';
import { motion } from 'motion/react';
import { ZagIconBase, type IconWeight, type ZagIconProps } from '../base/IconBase';
import {
  ZagAnimatedIconContainer,
  useAnimatedIconLifecycle,
  type AnimatedIconHandle,
  type ZagAnimatedIconProps,
} from '../base/AnimatedIconBase';
import { getIconAnimationVariants } from '../base/animations';

export type ${pascalName}IconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to \`'outline'\`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to \`false\`. */
  animated?: boolean;
};

export type ${pascalName}IconHandle = AnimatedIconHandle;
export type Animated${pascalName}IconProps = ZagAnimatedIconProps;

const ${pascalName.toUpperCase()}_ANIMATION_VARIANTS = getIconAnimationVariants('${kebabName}');

const ${pascalName.toUpperCase()}_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
${indentBody(bodies.outline.body)}
    </>
  ),
  filled: (
    <>
${indentBody(bodies.filled.body)}
    </>
  ),
};

/**
 * Animated ${pascalName} icon (viewBox "${viewBox}").
 * Features hover micro-interactions and imperative control via ref.
 */
export const Animated${pascalName}Icon = forwardRef<AnimatedIconHandle, Animated${pascalName}IconProps>(
  function Animated${pascalName}Icon(props, ref) {
    const {
      weight = 'outline',
      size = 24,
      color = 'currentColor',
      className,
      onMouseEnter,
      onMouseLeave,
      ...rest
    } = props;
    const { controls, handleMouseEnter, handleMouseLeave } = useAnimatedIconLifecycle(
      ref,
      onMouseEnter,
      onMouseLeave,
    );

    return (
      <ZagAnimatedIconContainer
        size={size}
        color={color}
        weight={weight}
        className={className}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        {...rest}
      >
        <motion.svg
          animate={controls}
          initial="normal"
          variants={${pascalName.toUpperCase()}_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="${viewBox}"
          width={size}
          height={size}
          color={color}
          focusable={false}
        >
          {${pascalName.toUpperCase()}_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

Animated${pascalName}Icon.displayName = 'Animated${pascalName}Icon';

/**
 * ${pascalName} icon (viewBox "${viewBox}").
 * Tinted via \`color\` / \`currentColor\` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const ${pascalName}Icon = forwardRef<SVGSVGElement, ${pascalName}IconProps>(
  function ${pascalName}Icon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <Animated${pascalName}Icon
          weight={weight}
          {...(rest as unknown as Animated${pascalName}IconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="${viewBox}" data-weight={weight} {...rest}>
        {${pascalName.toUpperCase()}_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

${pascalName}Icon.displayName = '${pascalName}Icon';
`;
}

function illustrationTemplate(params: {
  pascalName: string;
  kebabName: string;
  parsed: ParsedSvg;
}): string {
  const { pascalName, kebabName, parsed } = params;
  return `/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/illustrations/${kebabName}.svg

import { forwardRef, type ReactElement } from 'react';
import { ZagIllustrationBase, type ZagIllustrationProps } from '../base/IllustrationBase';

export type ${pascalName}Props = ZagIllustrationProps;

const ${pascalName.toUpperCase()}_ART: ReactElement = (
  <>
${indentBody(parsed.body)}
  </>
);

/**
 * ${pascalName} illustration (viewBox "${parsed.viewBox}").
 * Original multi-color fills and gradients are preserved.
 */
export const ${pascalName} = forwardRef<SVGSVGElement, ${pascalName}Props>(
  function ${pascalName}(props, ref) {
    return (
      <ZagIllustrationBase ref={ref} viewBox="${parsed.viewBox}" {...props}>
        {${pascalName.toUpperCase()}_ART}
      </ZagIllustrationBase>
    );
  },
);
`;
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

async function main(): Promise<void> {
  const iconsOutDir = path.join(reactSrcRoot, 'icons');
  const illustrationsOutDir = path.join(reactSrcRoot, 'illustrations');

  await rm(iconsOutDir, { recursive: true, force: true });
  await rm(illustrationsOutDir, { recursive: true, force: true });
  await mkdir(iconsOutDir, { recursive: true });
  await mkdir(illustrationsOutDir, { recursive: true });

  /* ---------------- Icons ---------------- */

  const outlineFiles = await listSvgFiles(path.join(dataRoot, 'icons', 'outline'));
  const filledFiles = await listSvgFiles(path.join(dataRoot, 'icons', 'filled'));
  const filledStems = new Set(filledFiles.map((entry) => entry.stem));

  const iconExports: string[] = [];
  let iconCount = 0;

  for (const entry of outlineFiles) {
    if (!filledStems.has(entry.stem)) {
      console.warn(
        `[generate-react] Skipping icon "${entry.stem}": missing filled variant.`,
      );
      continue;
    }
    const outlineSource = await readFile(
      path.join(dataRoot, 'icons', 'outline', entry.file),
      'utf8',
    );
    const filledSource = await readFile(
      path.join(dataRoot, 'icons', 'filled', entry.file),
      'utf8',
    );

    const bodies = {
      outline: await compileSvg(outlineSource, true),
      filled: await compileSvg(filledSource, true),
    } satisfies Record<Weight, ParsedSvg>;

    const pascalName = toPascalCase(entry.stem);
    const kebabName = toKebabCase(entry.stem);

    const componentFile = path.join(iconsOutDir, `${kebabName}.tsx`);
    await writeFile(
      componentFile,
      iconTemplate({ pascalName, kebabName, viewBox: bodies.outline.viewBox, bodies }),
      'utf8',
    );

    iconExports.push(
      `export { ${pascalName}Icon, Animated${pascalName}Icon, type ${pascalName}IconProps, type ${pascalName}IconHandle, type Animated${pascalName}IconProps } from './icons/${kebabName}';`,
    );
    iconCount += 1;
  }

  for (const entry of filledFiles) {
    if (!outlineFiles.some((candidate) => candidate.stem === entry.stem)) {
      console.warn(
        `[generate-react] Skipping icon "${entry.stem}": missing outline variant.`,
      );
    }
  }

  /* ---------------- Illustrations ---------------- */

  const illustrationFiles = await listSvgFiles(path.join(dataRoot, 'illustrations'));
  const illustrationExports: string[] = [];
  let illustrationCount = 0;

  for (const entry of illustrationFiles) {
    const source = await readFile(
      path.join(dataRoot, 'illustrations', entry.file),
      'utf8',
    );
    const parsed = await compileSvg(source, false);
    const pascalName = toPascalCase(entry.stem);
    const kebabName = toKebabCase(entry.stem);

    await writeFile(
      path.join(illustrationsOutDir, `${kebabName}.tsx`),
      illustrationTemplate({ pascalName, kebabName, parsed }),
      'utf8',
    );

    illustrationExports.push(
      `export { ${pascalName}, type ${pascalName}Props } from './illustrations/${kebabName}';`,
    );
    illustrationCount += 1;
  }

  /* ---------------- Barrel ---------------- */

  const indexSource = [
    '// GENERATED FILE - DO NOT EDIT.',
    "// Regenerated by `pnpm run generate:react`.",
    '',
    "export * from './base/IconBase';",
    "export * from './base/IllustrationBase';",
    "export * from './base/AnimatedIconBase';",
    "export * from './base/animations';",
    '',
    ...iconExports,
    '',
    ...illustrationExports,
    '',
  ].join('\n');

  await writeFile(path.join(reactSrcRoot, 'index.ts'), indexSource, 'utf8');

  console.log(
    `[generate-react] Wrote ${iconCount} icon(s), ${illustrationCount} illustration(s) and src/index.ts.`,
  );
}

main().catch((error) => {
  console.error('[generate-react] Failed:', error);
  process.exitCode = 1;
});
