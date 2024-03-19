import { Router }  from 'express'
import { wordleController } from '../controllers/wordleController'
import { schemaValidations } from '../middlewares/shemaValidations'
import { wordleSchema } from '../schema/wordleShema'

export default Router()
.post('/play',schemaValidations( wordleSchema) ,wordleController.Play)
.get('/amount',wordleController.Amount)
.get('/top',wordleController.Top)
.get('/match',wordleController.Match)
 
 