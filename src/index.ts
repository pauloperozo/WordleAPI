
import 'dotenv/config'
import { app } from './server/app'
import { env } from 'node:process';
import { AppDataSource } from "./database/data-source"

( async _=> {
 
    const { PORT } = env
 
    /*Database */
    await AppDataSource.initialize() 
    /*Server  */
    await app.listen( PORT, () =>  console.log(`API Corriendo Por El Puerto :${ PORT }`) )
    
})()