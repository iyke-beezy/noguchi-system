import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const surveySchema = mongoose.Schema({

    Subject: {
        type: String,
        required: true
    },
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    QuestionSet: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'QuestionSet'
        }
    ],

    timestamp: {
        type: Date,
        default: new Date()
    }
})

export default surveySchema