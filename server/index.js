import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import categoryRouter from './routes/categoryRoute.js'


const PORT =process.env.PORT ||3000
const MONGO_URI =process.env.MONGO_URI

export const app = express()

app.use('/api', categoryRouter)




//middleware : access path go to parameter 
//middleware : declaring middleware add app.get access path ,calling middleware and reload localhost 
//on terminal shows middleware
/*const middleware =(req,res,next)=>{console.log(`This is a middleware`)
next()
}*/

app.get('/',(req,res)=>{
    res.send('welcome to my ecommerce api')

})


mongoose.connect(MONGO_URI)
.then(()=> app.listen(PORT, ()=> console.log(`Server is running on  port ${PORT}`)))
.catch(err=>console.log(`${err}😡`))