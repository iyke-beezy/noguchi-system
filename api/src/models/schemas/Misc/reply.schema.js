import mongoose from 'mongoose'
import { config } from 'dotenv'

//Replies:
//User
//Text
//ForumID,
//timestamp

const replySchema = mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Text: {
        type: String,
        required: true
    },
    ForumID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Forum',
        required: true
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
})

export default replySchema