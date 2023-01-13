const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
var findOrCreate = require('mongoose-findorcreate')
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  direccion: {
    type: Array,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
  },
  admin: {
    type: Boolean,
  },
  favoritos: {
    type: Array,
  },
});

UserSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.plugin(findOrCreate)

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
