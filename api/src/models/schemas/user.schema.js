import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { config } from "dotenv";

config()


// BUILD THE USER SCHEMA
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User\'s name is required ']
    },
    privateKey: {
        type: String,
        required: [true, 'Private Key is required']
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: [true, "User must belong to a company"]
    },
    role: {
        type: String,
        required: [true, "User must have a role"]
    },
    lastReset: Date,
    lastLogin: Date,
    timestamp: {
        type: Date,
        default: Date.now
    }
})

//hash all private keys with Bcrypt
userSchema.pre("save", async function (next) {
    if (!this.privateKey || !this.isModified("privateKey")) return next;

    this.privateKey = await bcrypt.hash(
        this.privateKey,
        parseInt(process.env.HASH)
    );
    next();
});

//compare privateKey for login
userSchema.methods.comparePrivate = async function (privateKey) {
    return await bcrypt.compare(privateKey, this.privateKey);
};

//remove privateKey from user object when requested 
userSchema.methods.toJSON = function () {
    const user = this;

    const userObj = user.toObject();
    delete userObj.privateKey;
    return userObj;
};


export default userSchema