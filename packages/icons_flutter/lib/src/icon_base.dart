import 'package:flutter/material.dart';
import 'package:vector_graphics/vector_graphics.dart';

/// Visual weight variants available for every Zag icon.
enum IconWeight {
  /// Stroke-based rendering.
  outline,

  /// Solid fill rendering.
  filled,
}

/// Base widget shared by every generated Zag icon.
///
/// Renders precompiled [vector_graphics] bytecode from the package asset
/// bundle (`packages/zag_icons/assets/icons/<weight>/<name>.vg`), avoiding
/// runtime XML parsing entirely.
///
/// The glyph is tinted with a single [Color] resolved as:
///
/// 1. explicit [color],
/// 2. ambient `IconTheme.of(context).color`,
/// 3. `Theme.of(context).colorScheme.onSurface`.
class ZagIconBase extends StatelessWidget {
  const ZagIconBase({
    super.key,
    required this.name,
    this.weight = IconWeight.outline,
    this.size = 24.0,
    this.color,
    this.semanticLabel,
  });

  /// Asset name of the icon without extension (e.g. `home`).
  final String name;

  /// Which weight variant to render. Defaults to [IconWeight.outline].
  final IconWeight weight;

  /// Square logical-pixel size of the rendered icon.
  final double size;

  /// Explicit tint color. Falls back to the ambient [IconTheme], then to
  /// [ColorScheme.onSurface].
  final Color? color;

  /// Announced by screen readers when non-null.
  final String? semanticLabel;

  String get _assetPath =>
      'packages/zag_icons/assets/icons/${weight.name}/$name.vg';

  @override
  Widget build(BuildContext context) {
    final Color effectiveColor = color ??
        IconTheme.of(context).color ??
        Theme.of(context).colorScheme.onSurface;

    final Widget graphic = SizedBox(
      width: size,
      height: size,
      child: VectorGraphic(
        loader: AssetBytesLoader(_assetPath),
        width: size,
        height: size,
        colorFilter: ColorFilter.mode(effectiveColor, BlendMode.srcIn),
      ),
    );

    if (semanticLabel == null) {
      return ExcludeSemantics(child: graphic);
    }
    return Semantics(
      label: semanticLabel,
      child: graphic,
    );
  }
}
