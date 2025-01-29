const userModel = require("./../models/Employee/user.model");
const adminModel = require("./../models/Admin/admin.model");

module.exports.createUser =async ({ firstname, lastname, email, password }) => {
  const user =await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  return user;
};

module.exports.createAdmin =async ({ email, password }) => {
  const admin =await adminModel.create({
    email,
    password,
  });
  return admin;
}
