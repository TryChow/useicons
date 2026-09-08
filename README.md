# Zag Vector Assets

Single source of truth for custom SVG icons and illustrations, compiled into two
production-ready packages:

| Package | Platform | Tech |
| --- | --- | --- |
| `@zag/icons-react` | Web / React | SVGR components, ESM + CJS + types, tree-shakeable |
| `zag_icons` | Flutter | Precompiled `vector_graphics` `.vg` bytecode (no runtime XML parsing) |

Both packages support Reicon-style **weight variants** (`outline` / `filled`) for
icons, and preserve multi-color fills/gradients for illustrations.

---

## Repository layout

```text
data/                        # <-- EDIT HERE: source SVGs (the only hand-written assets)
  icons/outline/             #   stroke-based icon variants   (home.svg, heart.svg, ...)
  icons/filled/              #   solid-fill icon variants      (same file names as outline/)
  illustrations/             #   multi-color artwork           (empty_state.svg, ...)
packages/
  icons-react/               # generated React package (@zag/icons-react)
    src/icons/               #   generated TSX per icon
    src/illustrations/       #   generated TSX per illustration
    src/base/                # hand-written IconBase / IllustrationBase (stable API)
    dist/                    # build output (git-ignored)
  icons_flutter/             # generated Flutter package (zag_icons)
    assets/**/*.vg           # compiled bytecode (commit these!)
    lib/icons.dart           # generated ZagIcons class
    lib/illustrations.dart   # generated ZagIllustrations class
scripts/
  generate-react.ts          # SVG -> TSX via @svgr/core + SVGO
  generate-flutter.ts        # SVG -> .vg via vector_graphics_compiler + Dart classes
```

**Golden rule:** never edit anything under `packages/*/src/icons`, `src/illustrations`,
`assets/**`, `lib/icons.dart`, or `lib/illustrations.dart`. Edit the SVGs in `data/`,
regenerate, commit both source and output.

## Prerequisites

- Node.js >= 18.18 and pnpm >= 10 (`corepack enable`)
- Dart SDK + Flutter >= 3.22 (`flutter --version`)
- An npm account (only needed when publishing to a registry)

## Getting started

```bash
pnpm install                 # install toolchain deps
pnpm run generate:all        # data/*.svg -> React TSX + Flutter .vg + Dart classes
pnpm run build:all           # regenerate + build @zag/icons-react + typecheck
```

Useful checks:

```bash
pnpm run generate:react                          # regenerate React only
pnpm run generate:flutter                        # regenerate Flutter only
pnpm --filter @zag/icons-react typecheck         # tsc --noEmit
pnpm --filter @zag/icons-react build             # tsup -> dist/
cd packages/icons_flutter && dart analyze        # static analysis
```

---

## Adding an icon

1. Author two SVG files that share the same stem — one per weight:

```text
data/icons/outline/arrow-left-circle.svg
data/icons/filled/arrow-left-circle.svg
```

2. Design rules (enforced loosely, but follow for consistency):

- Root element carries `viewBox="0 0 24 24"` (any viewBox works, but stay uniform).
- **Outline variant:** stroke-based. `fill="none"`, stroke `#111827`,
  `stroke-width="1.5"`, round caps/joins recommended.
- **Filled variant:** identical silhouette as a closed shape with `fill="#111827"`.
- The exact hex value does not matter — the generator rewrites every concrete
  fill/stroke to `currentColor` for React, and Flutter applies a tint color
  filter. Do not use gradients or `url(#…)` fills inside icons.
- Both weights are required; a missing counterpart is skipped with a warning.

3. Regenerate and verify:

```bash
pnpm run generate:all
pnpm run build:all
cd packages/icons_flutter && dart analyze && cd ../..
```

4. Commit **both** the source SVGs and all generated files (React TSX, `.vg`
   binaries, generated Dart). Generated outputs must be in git so other repos can
   consume them directly.

### Adding an illustration

Drop one multi-color SVG into `data/illustrations/` (any viewBox, e.g.
`240x180`). Gradients, multiple fills and strokes are preserved verbatim — no
color rewriting happens. Then regenerate exactly as above.

### Naming conventions

File stems are split on `-`, `_`, and spaces, then PascalCased:

| File stem | React component | Flutter accessor |
| --- | --- | --- |
| `home.svg` | `<HomeIcon />` | `ZagIcons.home()` |
| `arrow-left-circle.svg` | `<ArrowLeftCircleIcon />` | `ZagIcons.arrowLeftCircle()` |
| `empty_state.svg` | `<EmptyState />` | `ZagIllustrations.emptyState()` |

---

## Using the packages in your apps

### React (`@zag/icons-react`)

Two install paths — pick the one that fits your workflow.

#### Option A – Install from npm (after publishing)

```bash
npm install @zag/icons-react
# or
pnpm add @zag/icons-react
```

#### Option B – Install directly from GitHub (no npm publish needed)

Use this while iterating or before you're ready to publish to the npm registry.
**Prerequisite:** the built `dist/` folder must be committed to git.  Remove `dist/`
from `.gitignore`, commit, and push.

**With pnpm** (supports monorepo sub-paths natively):

```bash
pnpm add "github:TryChow/useicons#main&path:packages/icons-react"
# Pin a tag for stability:
pnpm add "github:TryChow/useicons#@zag/icons-react@0.1.0&path:packages/icons-react"
```

**With npm / yarn** (workaround via `git subtree`):

```bash
# 1. In the useicons repo — create a release branch containing only the React package:
git subtree split --prefix=packages/icons-react -b icons-react-dist
git push origin icons-react-dist

# 2. In your app:
npm install github:TryChow/useicons#icons-react-dist
```

> **Note:** standard npm/yarn don't natively resolve monorepo `path:` selectors in
> GitHub URLs.  The `git subtree` approach above creates a slim branch with just the
> `icons-react` package at its root, so `npm install` works as expected.

**With yarn (Berry / v2+)** — works like pnpm:

```bash
yarn add "TryChow/useicons#path:packages/icons-react"
```

#### Usage (same regardless of install method)

```tsx
import { EmptyState, HeartIcon, HomeIcon } from '@zag/icons-react';

// Weight variants + sizing + className
<HomeIcon size={20} />
<HeartIcon weight="filled" size={24} className="text-red-500" />

// Animated variant via `animated` prop (triggers micro-interactions on hover)
<HomeIcon animated size={20} />
<HeartIcon animated weight="filled" size={24} className="text-red-500" />

// Programmatic / imperative control via dedicated animated export & ref
import { AnimatedHeartIcon, type HeartIconHandle } from '@zag/icons-react';

const heartRef = useRef<HeartIconHandle>(null);
// heartRef.current?.startAnimation();
// heartRef.current?.stopAnimation();

<AnimatedHeartIcon ref={heartRef} size={28} weight="filled" />

// currentColor by default; explicit override via `color`
<HomeIcon color="#2563eb" />

// Illustrations keep their original colors; accessible via aria-label
<EmptyState width={280} aria-label="No results found" />
```

Every icon accepts standard SVG props (`onClick`, `style`, `ref`, …) plus
`size?: number | string`, `color?: string`, `weight?: 'outline' | 'filled'`, and
`animated?: boolean`.
Components render at 24px by default and inherit text color via `currentColor`.

Local cross-repo testing without publishing:

```bash
# in this repo
cd packages/icons-react && pnpm build && npm pack
# in the app repo
npm install ../path/to/zag-icons-react-0.1.0.tgz
```

### Flutter (`zag_icons`)

Add to the app's `pubspec.yaml` — either from git (works today) or pub.dev:

```yaml
dependencies:
  zag_icons:
    git:
      url: https://github.com/TryChow/useicons.git
      ref: main            # pin a tag in real projects, e.g. zag_icons-v0.1.0
      path: packages/icons_flutter
```

```dart
import 'package:zag_icons/zag_icons.dart';

ZagIcons.home(),                                     // outline by default, 24px
ZagIcons.home(weight: IconWeight.filled),
ZagIcons.heart(size: 32, color: Colors.redAccent),   // explicit tint

ZagIllustrations.emptyState(width: 240),             // original colors preserved
```

Theming notes:

- Without an explicit `color`, icons pick up `IconTheme.of(context).color`,
  falling back to `Theme.of(context).colorScheme.onSurface` — so they tint
  correctly inside `AppBar`s, `ListTile`s, buttons, etc.
- Icons announce `semanticLabel` to screen readers when provided:
  `ZagIcons.home(semanticLabel: 'Go home')`.

---

## Publishing & sharing across repos

### 0. Push this repo

The directory starts un-initialized; set up git and push once:

```bash
git init
git add -A
git commit -m "feat: initial asset pipeline"
git branch -M main
git remote add origin https://github.com/TryChow/useicons.git
git push -u origin main
```

### 1. Version bumps

Before releasing, bump versions where they live:

- React: `packages/icons-react/package.json` → `"version"`
- Flutter: `packages/icons_flutter/pubspec.yaml` → `version`

Suggested tags: `@zag/icons-react@x.y.z` and `zag_icons-vx.y.z`.

### 2. Publish the React package to npm

`prepublishOnly` builds `dist/` automatically; `files` restricts the tarball to
`dist/`; `sideEffects: false` keeps tree-shaking intact.

```bash
npm login
pnpm --filter @zag/icons-react publish
# private registry instead? add .npmrc with //registry.npmjs.org/:_authToken or
# point scope @zag:registry=<your-registry> in each consuming repo
```

Consumers then run `npm install @zag/icons-react` (or
`pnpm add @zag/icons-react`) as shown above.

### 3. Ship the Flutter package

**Option A – git dependency (private repos, zero setup):**
Just make sure generated files are committed and pushed (they are, if you
followed [Adding an icon](#adding-an-icon)). Consumers use the `git:` dependency
snippet above. Pin `ref:` to a tag for stability:

```bash
git tag zag_icons-v0.1.0 && git push origin zag_icons-v0.1.0
```

**Option B – pub.dev:** edit `packages/icons_flutter/pubspec.yaml`, remove the
`publish_to: none` line, replace the placeholder `homepage` with real URLs,
then:

```bash
cd packages/icons_flutter
flutter pub publish        # or: dart pub publish --dry-run first
```

**Option C – self-hosted pub server:** same command with
`dart pub publish --hosted-url https://pub.<your-company>.dev`.

### 4. Recommended CI check (per PR)

```yaml
- run: pnpm install --frozen-lockfile
- run: pnpm run generate:all && git diff --exit-code   # assets in sync?
- run: pnpm run build:all
- run: cd packages/icons_flutter && dart analyze
```

---

## Scripts reference

| Command | What it does |
| --- | --- |
| `pnpm run generate:react` | SVGs → typed TSX components + barrel export |
| `pnpm run generate:flutter` | SVGs → `.vg` bytecode + `ZagIcons`/`ZagIllustrations` Dart classes |
| `pnpm run generate:all` | Both generators |
| `pnpm run build:all` | Generate everything, build `@zag/icons-react` (ESM/CJS/DTS), typecheck |
| `pnpm run typecheck` | Typecheck generator scripts |
