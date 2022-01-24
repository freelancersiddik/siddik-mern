const express = require("express");
var cookieParser = require("cookie-parser");

const router = express.Router();
router.use(cookieParser());
const User = require("../schema/userSchema");
const authentication = require("../middleware/authentication");
const bcryptjs = require("bcryptjs");
const path = require("path");
const { redirect } = require("express/lib/response");

// for production
__dirname = path.resolve();
if (process.env.NODE_ENV == "production") {
  router.use(express.static("client/build"));

  router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  router.use(express.static("client/build"));

  router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// } else if (process.env.NODE_ENV == "production") {
//   router.use(express.static("client/build"));

//   router.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// for localhost

router.use(express.static("client/build"));
router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


router.post("/register", async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
      res.status(422).json({ Error: "Fill requirenments" });
    }
    const userExisted = await User.findOne({ email: email });
    if (userExisted) {
      res.status(421).json({ Error: "User Already Existed" });
    } else {
      if (password !== cpassword) {
        res.status(422).json({ Error: "Password Not match" });
      } else {
        const Register = new User({
          name,
          email,
          password,
          cpassword,
        });
        await Register.save();
        res.status(200).json({ Message: "Register Successful" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ Error: "Fileld first" });
    }
    const Existes = await User.findOne({ email: email });
    if (!Existes) {
      res.status(422).json({ Error: "Invalid Credintials" });
    } else {
      const isMatch = await bcryptjs.compare(password, Existes.password);
      if (isMatch) {
        let token = await Existes.tokenGenarate();
        res.cookie("jwttoken", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
        res.status(200).json({ Message: "Login Successful" });
      } else {
        res.status(422).json({ Error: "Invalid Credintials" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/dashboard/authticate", authentication, (req, res) => {
  res.send(req.rootUser);
  console.log("dashboard");
});

router.get("/getdata", authentication, (req, res) => {
  res.send(req.rootUser);
});

router.post("/contact", authentication, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      res.status(422).json({ Error: "Invalid Field" });
    }
    const userContact = await User.findOne({ _id: req.userId });
    if (email === userContact.email) {
      if (userContact) {
        const userMessage = await userContact.addMessage(name, email, message);
        await userContact.save();
        res.status(200).json({ Message: "Added" });
      } else {
        res.status(422).json({ Error: "User not found" });
      }
    } else {
      res.status(422).json({ Error: "Invalid Email" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwttoken", { path: "/" });
  res.status(200).send("Logout");
});
router.get("/cookie", (req, res) => {
  res.send(req.token);
});

router.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

module.exports = router;
