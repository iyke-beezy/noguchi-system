import mongoose from 'mongoose'
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { config } from "dotenv";

config()
const jwtPrivateSecret = process.env.JWT_PRIVATE_SECRET.replace(/\\n/g, "\n");

//BUILD ORGANIZATION SCHEMA
const orgSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'fullName is required'],
    },
    username: {
        type: String,
        required: [true, 'username is required']
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: 8,
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email address"],
        // required: [true, 'Email is required'], //if you want email as required then uncomment
        unique: true
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    timestamp: {
        type: Date,
        default: Date.now
    },
    lastLogin: Date
})

//hash all passwords created with bycrypt
orgSchema.pre("save", async function (next) {
    if (!this.password || !this.isModified("password")) return next;

    this.password = await bcrypt.hash(
        this.password,
        parseInt(process.env.HASH)
    );
    next();
});

//compare passwords for login
orgSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//remove password from user object when requested 
orgSchema.methods.toJSON = function () {
    const user = this;

    const userObj = user.toObject();
    delete userObj.password;
    return userObj;
};

//generate private jwt codes for authorization which expires in 10days
orgSchema.methods.generateVerificationToken = function () {
    return jwt.sign({ id: this._id }, jwtPrivateSecret, {
        expiresIn: "10d",
        algorithm: "RS256",
    });
};

export default orgSchema