const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    receiver: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    content: String,
    chat: [{
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }]},{
        timestamps: true
    }
)

module.exports = mongoose.model('Message', messageSchema);