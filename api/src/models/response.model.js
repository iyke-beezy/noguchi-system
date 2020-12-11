import mongoose from 'mongoose'
import responseSchema from './schemas/Misc/response.schema'

const Response = mongoose.model('Response', responseSchema)

export default Response