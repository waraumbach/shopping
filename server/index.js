import express from 'express'

const app = express()


//middleware : access path go to parameter 
//middleware : declaring middleware add app.get access path ,calling middleware and reload localhost 
//on terminal shows middleware
const middleware =(req,res,next)=>{console.log(`This is a middleware`)
next()
}

app.get('/',(req,res)=>{
    res.send('welcome to my ecommerce api')

})


app.listen(3000, ()=> console.log(`Server is running on port 3000`))