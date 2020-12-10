import mongoose from 'mongoose'
import replySchema from './schemas/Misc/reply.schema'

const Reply = mongoose.model('Reply', replySchema)

export default Reply
