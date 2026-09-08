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

const outlineFillNonePlugin = {
  name: 'zag-outline-fill-none',
  fn: () => ({
    element: {
      enter: (node: { name: string; attributes?: Record<string, string | null> }) => {
        const attributes = node.attributes;
        if (!attributes) return;
        if (
          ['path', 'circle', 'rect', 'polygon', 'polyline', 'ellipse', 'line'].includes(
            node.name,
          )
        ) {
          if (!attributes.fill || attributes.fill === 'none') {
            attributes.fill = 'none';
          }
        }
      },
    },
  }),
};

function svgoConfig(iconLike: boolean, weight?: Weight): Record<string, unknown> {
  return {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            removeUselessStrokeAndFill: false,
          },
        },
      },
      ...(iconLike ? [currentColorPlugin] : []),
      ...(iconLike && weight === 'outline' ? [outlineFillNonePlugin] : []),
    ],
  };
}

async function compileSvg(
  source: string,
  iconLike: boolean,
  weight?: Weight,
): Promise<ParsedSvg> {
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
    svgoConfig: svgoConfig(iconLike, weight),
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

function homeIconTemplate(params: {
  pascalName: string;
  kebabName: string;
  viewBox: string;
  bodies: Record<Weight, ParsedSvg>;
}): string {
  const { pascalName, kebabName, viewBox, bodies } = params;
  return `/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/${kebabName}.svg

import { forwardRef, useId, type ReactElement } from 'react';
import type { Transition, Variants } from 'motion/react';
import { motion } from 'motion/react';
import { ZagIconBase, type IconWeight, type ZagIconProps } from '../base/IconBase';
import {
  ZagAnimatedIconContainer,
  useAnimatedIconLifecycle,
  type AnimatedIconHandle,
  type ZagAnimatedIconProps,
} from '../base/AnimatedIconBase';
import {
  DEFAULT_PATH_TRANSITION,
  PATH_DRAW_VARIANTS,
} from '../base/animations';

export type ${pascalName}IconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to \`'outline'\`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to \`false\`. */
  animated?: boolean;
};

export type ${pascalName}IconHandle = AnimatedIconHandle;
export type Animated${pascalName}IconProps = ZagAnimatedIconProps;

export const HOME_DEFAULT_TRANSITION: Transition = DEFAULT_PATH_TRANSITION;
export const HOME_PATH_VARIANTS: Variants = PATH_DRAW_VARIANTS;

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
 * Re-animates the door path drawing effect on both outline and filled weights.
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
    const rawId = useId();
    const maskId = \`zag-home-mask-\${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}\`;

    return (
      <ZagAnimatedIconContainer
        size={size}
        color={color}
        weight={weight}
        data-weight={weight}
        className={className}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        {...rest}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="${viewBox}"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {weight === 'filled' ? (
            <>
              <defs>
                <mask id={maskId}>
                  <rect width="24" height="24" fill="white" />
                  <motion.path
                    d="M9 18h6"
                    stroke="black"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    animate={controls}
                    initial="normal"
                    transition={HOME_DEFAULT_TRANSITION}
                    variants={HOME_PATH_VARIANTS}
                  />
                </mask>
              </defs>
              <path
                fill="currentColor"
                mask={\`url(#\${maskId})\`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823Z"
              />
            </>
          ) : (
            <>
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z"
              />
              <motion.path
                d="M9 18h6"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                animate={controls}
                initial="normal"
                transition={HOME_DEFAULT_TRANSITION}
                variants={HOME_PATH_VARIANTS}
              />
            </>
          )}
        </svg>
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
        data-weight={weight}
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
          fill="none"
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
      outline: await compileSvg(outlineSource, true, 'outline'),
      filled: await compileSvg(filledSource, true, 'filled'),
    } satisfies Record<Weight, ParsedSvg>;

    const pascalName = toPascalCase(entry.stem);
    const kebabName = toKebabCase(entry.stem);

    const componentFile = path.join(iconsOutDir, `${kebabName}.tsx`);
    const templateFn = kebabName === 'home' ? homeIconTemplate : iconTemplate;
    await writeFile(
      componentFile,
      templateFn({ pascalName, kebabName, viewBox: bodies.outline.viewBox, bodies }),
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
