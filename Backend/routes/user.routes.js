const express = require("express")
const router = express.Router();
const { body } = require("express-validator")
const userController = require("../controllers/user.controller.js")


router.post("/register", [
    body("email").isEmail().withMessage("invalid emial"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("First name must be at least 3 character long "),
    body("password").isLength({min:8}).withMessage("password must be of atleast 8 length ")

], userController.registerUser)









module.exports = router;