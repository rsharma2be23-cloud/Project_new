// create the server
const express=require('express')

const app=express()
app.use(express.json())


const notes=[]
// to create new nodes
app.post('/notes',(req,res)=>{
 notes.push(req.body)// pushes into the notes array whatever we want to write

 res.status(201).json({
  message:"node created succesfully"
 })
})
// to get nodes created from server to the frontend
app.get('/notes',(req,res)=>{


  res.status(200).json({
    message:"notes fetched succesfully",
    Notes:notes
  })
})

module.exports=app



          

  