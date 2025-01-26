const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  leaveType: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;
