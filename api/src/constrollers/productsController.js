const { findById } = require("../models/Cart.js");
const ProductsModel = require("../models/Product.js");

module.exports = {
  putProduct: async function (id, product) {
    try {
      const oldProduct = await ProductsModel.findByIdAndUpdate(id);
      if (oldProduct) {
        oldProduct.quantity = product.quantity;
        oldProduct.price = product.price;
        console.log("Actualizado");
      }
      await oldProduct.save();
    } catch (error) {
      console.log(error);
    }
  },
  putProductCalification: async function (product) {
    console.log(product)
    try {
      const oldProduct = await ProductsModel.findByIdAndUpdate(product._id);
      if (oldProduct) {
        oldProduct.calification.push(product.calification)
        let promedio = oldProduct.calification.reduce((a,b)=> a+b, 0)/oldProduct.calification.length
        console.log(oldProduct);
        oldProduct.promedio= promedio
      if(product.coments){
        oldProduct.coments.push(product.coments)
        console.log("se agrego comentario y rating")
      }
      }
     await oldProduct.save();
    } catch (error) {
      console.log(error);
    }
  },
}
