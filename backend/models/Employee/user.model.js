const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//   fullname: {
//     firstname: {
//       type: String,
//       required: true,
//     },
//     lastname: {
//       type: String
     
//     },
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     select: false,
//   },
// });

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
//   return token;
// };

// userSchema.statics.hashPassword = function (password) {
//   return bcrypt.hash(password, 10);
// };

// userSchema.methods.comparePassword = function (password) {
//   return bcrypt.compare(password, this.password);
// };

// const userModel = mongoose.model("user", userSchema);

// module.exports = userModel;
const userSchema = new mongoose.Schema({
  employeeId: {
      type: String,
      required: true,
  },
  fullName: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
  },
  password: {
      type: String,
      required: true,
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;