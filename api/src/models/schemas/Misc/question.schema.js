import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'Question Title needed']
    },

    responseType: {
        type: String,
        required: [true, 'responseType is required']
    },

    surveyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey'
    },
    
    timestamp: {
        type: Date,
        default: new Date()
    }
})

export default questionSchema