import passport from "passport";
import debug from "debug";
import passportLocal from "../passport/passport-local";
import { ApplicationError, NotFoundError } from "../helpers/errors";

const DEBUG = debug("dev");

const createCookieFromToken = (org, statusCode, req, res) => {
    const token = org.generateVerificationToken();

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            org,
        },
    });
};

export default {
    signup: async (req, res, next) => {
        passport.authenticate(
            "signup",
            { session: false },
            async (err, org, info) => {
                try {
                    if (err || !org) {
                        const { statusCode = 400, message } = info;

                        return res.status(statusCode).json({
                            status: "error",
                            error: {
                                message,
                            },
                        });
                    }
                    createCookieFromToken(org, 201, req, res);
                } catch (error) {
                    DEBUG(error);
                    throw new ApplicationError(500, error);
                }
            }
        )(req, res, next);
    },

    login: (req, res, next) => {
        passport.authenticate("login", { session: false }, (err, org, info) => {
            if (err || !org) {
                let message = err;
                if (info) {
                    message = info.message;
                }
                return res.status(401).json({
                    status: "error",
                    error: {
                        message,
                    },
                });
            }
            createCookieFromToken(org, 200, req, res);
        })(req, res, next);
    },

    userSignup: (req, res, next) => {
        passport.authenticate(
            "signup",
            { session: false },
            async (err, org, info) => {
                try {
                    if (err || !org) {
                        const { statusCode = 400, message } = info;

                        return res.status(statusCode).json({
                            status: "error",
                            error: {
                                message,
                            },
                        });
                    }
                    res.status(200).json({
                        status: "success",
                        data: {
                            user,
                        }
                    })
                } catch (error) {
                    DEBUG(error);
                    throw new ApplicationError(500, error);
                }
            }
        )(req, res, next);
    },

    userLogin: (req, res, next) => {
        passport.authenticate("login", { session: false }, (err, user, info) => {
            if (err || !user) {
                let message = err;
                if (info) {
                    message = info.message;
                }
                return res.status(401).json({
                    status: "error",
                    error: {
                        message,
                    },
                });
            }
            res.status(200).json({
                status: "success",
                data: {
                    user,
                }
            })
        })(req, res, next);
    },

};