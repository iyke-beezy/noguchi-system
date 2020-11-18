import debug from 'debug';
import { Strategy } from 'passport-local';
import passport from 'passport';

import Org from '../models/org.model'
import User from '../models/user.model'

import { addUserToOrg } from '../controllers/org.controller'

const DEBUG = debug('dev')

const authFields = {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}

passport.use(
    'login',
    new Strategy(authFields, async (req, username, password, cb) => {
        try {
            const org = await Org.findOne({
                $or: [{ email: username }, { username: username }],
            });
            if (!org || !org.password) {
                return cb(null, false, { message: 'Email is not registered.' });
            }

            const checkPassword = await org.comparePassword(password);

            if (!checkPassword) {
                return cb(null, false, { message: 'Incorrect password.' });
            }
            org.lastLogin = Date.now()
            org.markModified('lastLogin')
            await org.save();
            return cb(null, org, { message: 'Logged In Successfully' });
        } catch (err) {
            DEBUG(err);
            return cb(null, false, { statusCode: 400, message: err.message });
        }
    }),
)

passport.use(
    'userLogin',
    new Strategy({ usernameField: 'name', passwordField: 'privateKey', passReqToCallback: true }, async (req, name, privateKey, cb) => {
        try {
            const user = await User.checkExistingField('name', name);
            if (!user || !user.privateKey) {
                return cb(null, false, { message: 'name is not registered.' });
            }

            const checkPassword = await user.comparePrivate(privateKey);

            if (!checkPassword) {
                return cb(null, false, { message: 'Incorrect password.' });
            }
            user.lastLogin = Date.now()
            user.markModified('lastLogin')
            await user.save();
            return cb(null, user, { message: 'Logged In Successfully' });
        } catch (err) {
            DEBUG(err);
            return cb(null, false, { statusCode: 400, message: err.message });
        }
    }),
)

passport.use(
    'signup',
    new Strategy(authFields, async (req, email, password, cb) => {
        try {
            const checkEmail = await Org.checkExistingField('email', req.body.email);

            if (checkEmail) {
                return cb(null, false, {
                    statusCode: 409,
                    message: 'Email already registered, log in instead',
                });
            }

            const checkUsername = await Org.checkExistingField('username', req.body.username);
            if (checkUsername) {
                return cb(null, false, {
                    statusCode: 409,
                    message: 'Username exists, please try another',
                });
            }


            const newOrg = new Org();
            newOrg.fullName = req.body.fullName;
            newOrg.username = req.body.username;
            newOrg.email = req.body.email;
            newOrg.password = req.body.password;

            await newOrg.save();
            return cb(null, newOrg, { statusCode: 200, message: 'success' });
        } catch (err) {
            DEBUG(err)
            return cb(null, false, { statusCode: 400, message: err.message });
        }
    }),
);

passport.use(
    'userSignup',
    new Strategy({ usernameField: 'name', passwordField: 'privateKey', passReqToCallback: true }, async (req, name, privateKey, cb) => {
        // console.log(req.body)
        try {
            const checkUsername = await User.checkExistingField('name', req.body.name);
            if (checkUsername) {
                return cb(null, false, {
                    statusCode: 409,
                    message: 'Username exists, please try another',
                });
            }

            const newUser = new User();
            newUser.name = req.body.name;
            newUser.privateKey = req.body.privateKey;
            newUser.company = req.body.company;
            newUser.role = req.body.role;
            await newUser.save();

            try {
                const addUser = await addUserToOrg(req.body.company, newUser._id)
                return cb(null, newUser, { statusCode: 200, message: 'success' });
            } catch (err) {
                DEBUG(err)
                return cb(null, false, { statusCode: 400, message: err.message })
            }

        } catch (err) {
            DEBUG(err)
            return cb(null, false, { statusCode: 400, message: err.message });
        }
    }),
);

