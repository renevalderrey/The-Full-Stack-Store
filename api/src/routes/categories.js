const { Router } = require("express");
const router = Router();
const CategoriesSchema = require("../models/Categories");
const { getCategories } = require("../constrollers/categories.controllers");

router.get("/", (req, res) => {
  CategoriesSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error }));
});
router.post("/", (req, res) => {
  CategoriesSchema;
  getCategories()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error }));
});

module.exports = router;
