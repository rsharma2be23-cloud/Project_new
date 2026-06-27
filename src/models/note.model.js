const mongoose=require("mongoose")


const noteSchema=new mongoose.Schema({

  title:String,
  description:String, 
})

const noteModel=mongoose.model("note",noteSchema)// needed for CRUD operations

module.exports=noteModel