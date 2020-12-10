import mongoose, { mongo } from 'mongoose'

const questionSetSchema = mongoose.Schema({
    Question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: [true, 'Question must be included']
    },

    Responses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Response',
            required: [true, 'Response must be added']
        }
    ],

})

export default questionSetSchema
