require('dotenv').config()
const express =require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/t',(req,res)=>{
    res.send('Hello world')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>you are at youtube page</h2>')
})

app.listen(process.env.port,()=>{
    console.log(`Example app listening on port ${port}`)
})