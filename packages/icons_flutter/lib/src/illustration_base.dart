import 'package:flutter/material.dart';
import 'package:vector_graphics/vector_graphics.dart';

/// Base widget shared by every generated Zag illustration.
///
/// Unlike [ZagIconBase] no color filter is applied: the original multi-color
/// fills, strokes and gradients baked into the `.vg` bytecode are preserved.
class ZagIllustrationBase extends StatelessWidget {
  const ZagIllustrationBase({
    super.key,
    required this.name,
    this.width,
    this.height,
    this.fit = BoxFit.contain,
    this.semanticLabel,
  });

  /// Asset name of the illustration without extension (e.g. `empty_state`).
  final String name;

  /// Optional width. When null the view-box aspect ratio decides layout.
  final double? width;

  /// Optional height. When null the view-box aspect ratio decides layout.
  final double? height;

  /// How the artwork inscribes itself into the laid-out box.
  final BoxFit fit;

  /// Announced by screen readers when non-null.
  final String? semanticLabel;

  String get _assetPath => 'packages/zag_icons/assets/illustrations/$name.vg';

  @override
  Widget build(BuildContext context) {
    final Widget graphic = SizedBox(
      width: width,
      height: height,
      child: FittedBox(
        fit: fit,
        child: VectorGraphic(loader: AssetBytesLoader(_assetPath)),
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
