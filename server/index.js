import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send('welcome to my ecommerce api')

})
app.get('/', (req,res)=>{
    res.send('welcome to my ecommerce api')

})


app.listen(3000, ()=> console.log(`Server is running on port 3000`))