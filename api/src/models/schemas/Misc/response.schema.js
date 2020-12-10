import mongoose from 'mongoose'

const responseSchema = mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'response must come from a user']
    },

    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: [true, 'response must belong to a question']
    },

    Value: {
        type: String,
        required: [true, 'response value needed']
    },

    timestamp: {
        type: Date,
        default: new Date()
    }
})

export default responseSchema