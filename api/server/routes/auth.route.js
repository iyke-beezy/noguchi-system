import { Router } from 'express'
import authController from '../controllers/auth.controller'
import catchAsync from '../middlewares/catchAsync'

const authRouter = Router();

const { login, signup, userLogin } = authController

authRouter.post('/login', catchAsync(login))
authRouter.post('/signup', catchAsync(signup))
authRouter.post('/userLogin', catchAsync(userLogin))

