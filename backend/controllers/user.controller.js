const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userServices = require("../services/user.services");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ erros: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const isExistingUser = await userModel.findOne({ email });
  if (isExistingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userServices.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select('+password');

  if (!user) {
     return res.status(401).json({ message: 'invalid email or password' })
  }

  const isMatch = await user.comparePassword(password);
  

  if (!isMatch) {
     return res.status(401).json({ message: 'invalid email or password' })
  }
  const token = await user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, user , message: 'login successful' });
};
