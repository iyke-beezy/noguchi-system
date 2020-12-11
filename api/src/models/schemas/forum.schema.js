// Forums
// Title
// Author
// Description 
// Disease 
// Location
// Replies

import mongoose from 'mongoose'
import { config } from 'dotenv'

config();

const forumSchema = mongoose.Schema({
    Title: {
        type:String,
        required: true
    },
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Description: String,
    Disease: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disease',
        required: true
    },
    Location: String,
    Replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    }],
    timestamp: {
        type: Date,
        default: new Date()
    }
})

export default forumSchema