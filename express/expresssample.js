const express=require('express')
const path=require('path')
const { nextTick } = require('process')

const app=express()
app.use((req,res,next)=>{
    console.log('start')
    next()
})

app.get('/',(req,res)=>{

    // res.sendFile(path.join(__dirname,'signup.html'))
    res.send('hello')
})
app.get('/signup',(req,res,next)=>{

    res.sendFile(path.join(__dirname,'signup.html'))
    console.log('middle')
    next()
})
app.use(()=>{
    console.log('end')
})
app.post('/signup',(req,res)=>{
    
    res.send('account created')
})

app.get('/about',(req,res)=>res.send('about'))






app.listen(3000,()=>{
    console.log('server started')
console.log(__dirname)})