import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { config } from 'dotenv';
import Org from '../models/org.model';

config()

const jwtPublicSecret = process.env.JWT_PUBLIC_SECRET.replace(/\\n/g, '\n');


const options = {
    secretOrKey: jwtPublicSecret,
    algorithms: ['RS256'],
    passReqToCallback: true,
    ignoreExpiration: true
};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()

passport.use(
    new Strategy(options, (req, jwtPayload, done) => {
        Org.findOne({ _id: jwtPayload.id })
            .then(org => {
                if (org) {
                    delete org._doc.password;
                    done(null, org);
                } else {
                    done(null, false);
                }
            })
            .catch(err => {
                if (err) {
                    return done(err, false);
                }
            });
    }),
);

export default passport;