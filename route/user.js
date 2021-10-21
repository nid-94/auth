// require express
const express = require("express");
const { signup, signin } = require("../controllers/user");
const isAuth = require("../middleware/user");
const {
    regsiterValidation,
    validation,
    loginValidation,
} = require("../middleware/validator");

// create instance
const router = express.Router();

// Authenfication (signup && signin)
// ==>signup
router.post("/signup", regsiterValidation(), validation, signup);
router.post("/signin", loginValidation(), validation, signin);
// current user
router.get("/current", isAuth, (req, res) => {
    res.send(req.user);
});

module.exports = router;
