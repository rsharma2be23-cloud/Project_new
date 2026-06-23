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
    Notes:notes// gets the notes array
  })
})

app.delete('/notes/:index',(req,res)=>{
  const Index=req.params.index
  delete notes[Index]// perfroms deletion
  res.status(200).json({
    message:"note has been deleted"
  })
})

app.patch('/notes/:index',(req,res)=>{
  const Index=req.params.index
  const description=req.body.description // new desc
  const title=req.body.title// new title
  notes[Index].description=description//replace old desc with new updated desc 
  notes[Index].title=title
  res.status(200).json({
    message: "note updated succesfully"
  })

})
app.delete('/notes/:index',(req,res)=>{
  const Index=req.params.index
  delete notes[Index]// perfroms deletion
  res.status(200).json({
    message:"note has been deleted"
  })
})



module.exports=app
 


          

  