const express=require('express');
const noteModel=require("./models/note.model")

const app=express();

app.use(express.json());// Middleware


// CRUD apis

app.post("/notes",async (req,res)=>{
  const data=req.body
  await noteModel.create({
    title: data.title,
    description: data.description
  })
  res.status(201).json({
    message:"Note Created woo!!"
  })
})


app.get("/notes",async(req,res)=>{

  const notes= await noteModel.find()

  res.status(200).json({
    message:"we got da nodes!!",
    notes:notes
  })

})

app.delete("/notes/:id",async(req,res)=>{
  const id=req.params.id
  await noteModel.findOneAndDelete({
    _id:id// _id because thats how it is stored in mongodb
  })
  res.status(200).json({
    message:"Node is gonee!"
  })
})

app.patch("/notes/:id",async(req,res)=>{
  const id=req.params.id
  const description=req.body.description

  await noteModel.findOneAndUpdate({_id:id},{description:description})

  res.status(200).json({
    message:"Node has been updated Y'all "
  })
  
})

module.exports=app




