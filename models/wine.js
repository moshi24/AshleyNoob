const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  red1_white0: { type: Number, required: true },
  wine_region: { type: String, required: true },
  grape_variety: { type: String, required: true },
  price: { type: Number, required: false },
  sparkling1_still5:{ type: Number, required: false },
  sweetness: { type: String, required: true },
  sweetNum: { type: Number, required: true },
  acidity: { type: String, required: true },
  acidNum: { type: Number, required: true },
  tannin: { type: String, required: true },
  tannNum: { type: Number, required: true },
  alcohol: { type: String, required: true },
  alcoNum: { type: Number, required: true },
  body: { type: String, required: true },
  bodyNum: { type: Number, required: true },
  unoaked1_oaked5: { type: Number, required: false },
  fruity1_savory5: { type: Number, required: false },
  alcohol_by_volume: { type: Number, required: true },
  organic: { type: Boolean, required: false },
  biodynamic: { type: Boolean, required: false },
  flavor_characteristics: { type: String, required: true },
  food_pairing: { type: String, required: false },
  image: { type: String, required: false },
  url: { type: String, required: false },
  description: { type: String, required: true },



  
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
