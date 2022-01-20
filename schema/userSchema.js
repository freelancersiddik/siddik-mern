const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");
const jswebtokon = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date(Date.now().toLocaleString()),
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
  messages: [
    {
      name: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
      },
      message: {
        type: String,
        require: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
  }
  next();
});

// token genarate
userSchema.methods.tokenGenarate = async function () {
  try {
    const tokengenarate = jswebtokon.sign(
      { _id: this._id },
      process.env.SECRET_KEY
    );
    this.tokens = this.tokens.concat({ token: tokengenarate });
    await this.save();
    return tokengenarate;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.addMessage = async function (name, email, message) {
  try {
    this.messages = this.messages.concat({ name, email, message });
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
