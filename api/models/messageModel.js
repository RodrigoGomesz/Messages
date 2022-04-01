const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const MessageModel = mongoose.model('messages', messageSchema);

module.exports = MessageModel;