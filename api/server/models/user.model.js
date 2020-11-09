import mongoose from 'mongoose'
import userSchema from './schemas/user.schema'

userSchema.statics.checkExistingField = async (field, value) => {
    const checkField = await User.findOne({ [`${field}`]: value });

    return checkField;
};

const User = mongoose.model('User', userSchema)
export default User