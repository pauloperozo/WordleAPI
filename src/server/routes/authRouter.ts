
import {Router}  from 'express'
import { AuthController } from '../controllers/authController'
import { schemaValidations } from '../middlewares/shemaValidations'
import { signinSchema, signupSchema } from '../schema/authSchema'

export default  Router()
.post('/signup', schemaValidations( signupSchema ),AuthController.SignUp)
.post('/signin',schemaValidations( signinSchema ),AuthController.SignIn)
