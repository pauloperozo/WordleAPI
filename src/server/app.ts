
import express from 'express'
import logger  from 'morgan'
import cors    from 'cors'
import routes  from './routes'
import auth    from './middlewares/authorization'
import cookies from 'cookie-parser'
/*Init Express */
const app = express()
      app.use( cors() )
      app.use( logger("dev") )
      app.use( express.json({limit: '50mb'}) )
      app.use( cookies())
      app.use( express.urlencoded( { limit: '50mb', extended: true } ) ) /* Tamaño De 50MB  */
      app.use( auth )
      routes.forEach( route => app.use(route.name,route.router ) )
            
export { app }
      
  


