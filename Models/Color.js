const mongoose = require('mongoose');

const rgbSchema = new mongoose.Schema({
    red: { type: Number, min: 0, max: 255 },
    green: { type: Number, min: 0, max: 255 },
    blue: { type: Number, min: 0, max: 255 }
});
const hsvSchema = new mongoose.Schema({
    hue: { type: Number, min: 0, max: 360 },
    saturation: { type: Number, min: 0, max: 100 },
    value: { type: Number, min: 0, max: 100 }
});
const cmykSchema = new mongoose.Schema({
    cyan: { type: Number, min: 0, max: 100 },
    magenta: { type: Number, min: 0, max: 100 },
    yellow: { type: Number, min: 0, max: 100 },
    black: { type: Number, min: 0, max: 100 }
});

const colorSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    hex: { type: String, required: true },
    rgb: rgbSchema,
    hsv: hsvSchema,
    cmyk: cmykSchema
});

module.exports = mongoose.model('colors', colorSchema);
