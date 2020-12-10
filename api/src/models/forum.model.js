import mongoose from 'mongoose'
import forumSchema from './schemas/forum.schema'

const Forum = mongoose.model('Forum', forumSchema)

export default Forum