const { Router } = require("express");
const router = Router();
const productSchema = require("../models/Product");
const {
  putProduct,
  putProductCalification,
} = require("../constrollers/productsController");

// Ruta para obtener todos los productos en la base de datos
router.get("/", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error }));
});

// Ruta para obtener un producto específico por su ID
router.get("/:id", (req, res) => {
  productSchema
    .findById(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => res.json({ message: error }));
});

// Ruta para crear un nuevo producto
router.post("/", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Ruta para actualizar un producto existente por su ID
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  putProduct(id, product)
    .then((product) => res.json(product))
    .catch((error) => res.json({ message: error }));
});

// Ruta para actualizar la calificación de un producto existente por su ID
router.put("/rating/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  putProductCalification(product, id)
    .then((product) => res.json(product))
    .catch((error) => res.json({ message: error }));
});

// Ruta para eliminar un producto existente por su ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error }));
});

module.exports = router;
