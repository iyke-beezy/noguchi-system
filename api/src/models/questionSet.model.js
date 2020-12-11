import mongoose from 'mongoose'
import questionSetSchema from './schemas/Misc/questionSet.schema'

const QuestionSet = mongoose.model('QuestionSet', questionSetSchema)

export default QuestionSet