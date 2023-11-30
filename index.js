require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>welcome to akhilesh app</h2')
})

app.listen(process.env.PORT,()=>{
    console.log(`running on port number ${process.env.PORT}`)
})