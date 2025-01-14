const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("fullname.firstname")
      .trim()
      .isLength(
        { min: process.env.FIRSTNAME_MIN_LENGTH },
        { max: process.env.FIRSTNAME_MAX_LENGTH }
      )
      .withMessage(
        `First name must be between ${process.env.FIRSTNAME_MIN_LENGTH} and ${process.env.FIRSTNAME_MAX_LENGTH} characters long`
      ),

    body("fullname.lastname")
      .trim()
      .isLength(
        { min: process.env.LASTNAME_MIN_LENGTH },
        { max: process.env.LASTNAME_MAX_LENGTH }
      )
      .withMessage(
        `Last name must be between ${process.env.LASTNAME_MIN_LENGTH} and ${process.env.LASTNAME_MAX_LENGTH} characters long`
      ),

    body("email")
      .trim()
      .isEmail()
      .isLength(
        { min: process.env.EMAIL_MIN_LENGTH },
        { max: process.env.EMAIL_MAX_LENGTH }
      )
      .withMessage(
        `Email must be between ${process.env.EMAIL_MIN_LENGTH} and ${process.env.EMAIL_MAX_LENGTH} characters long`
      ),
    body("password")
      .trim()
      .isLength(
        { min: process.env.PASSWORD_MIN_LENGTH },
        { max: process.env.PASSWORD_MAX_LENGTH }
      )
      .withMessage(
        `Password must be at least ${process.env.PASSWORD_MIN_LENGTH} characters long`
      ),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email")
      .trim()
      .isEmail()
      .isLength(
        { min: process.env.EMAIL_MIN_LENGTH },
        { max: process.env.EMAIL_MAX_LENGTH }
      )
      .withMessage(
        `Email must be between ${process.env.EMAIL_MIN_LENGTH} and ${process.env.EMAIL_MAX_LENGTH} characters long`
      ),
    body("password")
      .trim()
      .isLength(
        { min: process.env.PASSWORD_MIN_LENGTH },
        { max: process.env.PASSWORD_MAX_LENGTH }
      )
      .withMessage(
        `Password must be at least ${process.env.PASSWORD_MIN_LENGTH} characters long`
      ),
  ],
  userController.loginUser
);

module.exports = router;
