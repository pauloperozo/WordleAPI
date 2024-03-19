import welcomeRouter from './welcome'
import authRouter from './authRouter'
import wordleRouter from './wordleRouter'

export default [  
    { name: "/", router: welcomeRouter },
    { name: "/auth", router: authRouter },
    { name: "/wordle", router: wordleRouter }
]