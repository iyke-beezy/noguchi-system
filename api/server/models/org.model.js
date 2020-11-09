import mongoose from 'mongoose'
import orgSchema from './schemas/org.schema'

orgSchema.statics.checkExistingField = async (field, value) => {
    const checkField = await Org.findOne({ [`${field}`]: value });

    return checkField;
};

const Org = mongoose.model('Organization', orgSchema)
export default Org