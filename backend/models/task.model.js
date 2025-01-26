const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const taskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    hoursSpent: {
        type: Number,
        required: true,
    },
    progressUpdate: {
        type: String,
        required: true,
    },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;