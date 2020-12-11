import mongoose from 'mongoose'
import questionSchema from './schemas/Misc/question.schema'

const Question = mongoose.model('Question', questionSchema)

export default Question