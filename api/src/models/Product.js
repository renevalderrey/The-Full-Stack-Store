const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },  
  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  compatible: {
    type: Number,
  },
  favorites: {
    type: Array,
  },
  calification: {
    type: Array,
  },
  coments: {
    type: Array,
  },
  categories: {
    type: Array,
  },
  promedio:{
    type:Number
  }
});

const ProductsModel = mongoose.model("products", ProductsSchema);

module.exports = ProductsModel;
