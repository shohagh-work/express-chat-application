// external imports
const mongoose = require("mongoose");

// create schema
const conversationSchema = mongoose.Schema(
    {
        creator: {
            id: mongoose.Types.ObjectId,
            name: String,
            avatar: String,
        },

        participant: {
            id: mongoose.Types.ObjectId,
            name: String,
            avatar: String,
        },

        last_updated: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);


// create model
const Conversation = mongoose.model("Conversation", conversationSchema);

// exports
module.exports = Conversation;