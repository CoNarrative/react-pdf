export const availableMethods = [
  'dash',
  'clip',
  'save',
  'path',
  'fill',
  'font',
  'text',
  'rect',
  'scale',
  'moveTo',
  'lineTo',
  'stroke',
  'rotate',
  'circle',
  'lineCap',
  'opacity',
  'ellipse',
  'polygon',
  'restore',
  'lineJoin',
  'fontSize',
  'fillColor',
  'lineWidth',
  'translate',
  'miterLimit',
  'strokeColor',
  'fillOpacity',
  'roundedRect',
  'strokeOpacity',
  'bezierCurveTo',
  'quadraticCurveTo',
  'linearGradient',
  'radialGradient',
  'closePath',
  'transform',
  'fillAndStroke',
  '_registeredFonts',
];

const painter = function(instance) {
  // just pass through...
  return instance;
};

export default painter;
