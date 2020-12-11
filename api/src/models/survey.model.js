import mongoose from 'mongoose'
import surveySchema from './schemas/survey.schema'

const Survey = mongoose.model('Survey', surveySchema)

export default Survey