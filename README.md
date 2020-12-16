# Colors API

Creating my own API using Express, MongoDB, and Mongoose

This Colors API contains color names and the various ways to represent them according to certain conventions. All entires must contain a color name and hex code value. Additionally, there may be an rgb value, [hsv](https://programmingdesignsystems.com/color/color-models-and-color-spaces/index.html) value and [cmyk](https://www.gmund.com/content/en/cmyk-color-model) vlaue. To check conversions between color representations check out [this site](https://www.rapidtables.com/convert/color/rgb-to-hsv.html).

## Installing and Using:

1. `fork` and `clone` this repository to your local machine
2. Run `npm install` to grab the proper dependencies
3. Uncomment the entries you want in the `seed.js` file to start off the database
4. Create a `.env` file with the necessary Mongo and Port variables
5. Run `node server.js` and open an app such as Postman to interact with the API

## Endpoints

| Method | Route         | JSON Body Requirements                       |
| ------ | ------------- | -------------------------------------------- |
| GET    | /colors       | n/a                                          |
| GET    | /colors/:name | n/a                                          |
| POST   | /colors       | {"name" : "color name", "hex" : "#hexcode" } |
| PUT    | /colors/:name | { "field to update" : "new value" }          |
| DELETE | /colors/:name | n/a                                          |

## Colors Schema

#### Main Schema:

```javascript
const colorSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    hex: { type: String, required: true },
    rgb: rgbSchema,
    hsv: hsvSchema,
    cmyk: cmykSchema
});
```

#### Embedded Schema:

```javascript
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
```
