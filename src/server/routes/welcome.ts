import { Request, Response }  from 'express'
import {Router}  from 'express'

export default  Router()
.get('/welcome', ( req:Request, res:Response ) => {
    res.json({message:"Welcome"})
})