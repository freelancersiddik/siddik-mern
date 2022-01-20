const jwt = require("jsonwebtoken");
const User = require("../schema/userSchema");
const Authentication = async (req, res, next) => {
  try {
    const token = req.cookies.jwttoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("No Tokn Found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("Unauthoraize : No token found");
    console.log(error);
  }
};

module.exports = Authentication;
