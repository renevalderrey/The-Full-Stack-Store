const { Router } = require("express");
const router = Router();
const passport = require("passport");
const userSchema = require("../models/Users.js");

router.post(
  "/",
  passport.authenticate("local-signin", {
    successRedirect: "/users",
    failureRedirect: "/signin",
    passReqToCallback: true,
    failureMessage: "Incorrecto",
  })
);

router.get("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    !email || !password
      ? res.status(400).send("Usuario o contraseña incorrecta")
      : res.status(200).send("Inicio de sesión correcto");
  } catch (error) {
    res.status(400).send("Usuario o contraseña incorrecta");
  }
});

module.exports = router;
