const mongoose=require('mongoose');


async function connectDB() {

// js wont move to next line until this await func is finished
  await mongoose.connect("mongodb+srv://RayanSharma:EagxXguxD3tLz7-@cluster0.hrdlmqk.mongodb.net/Pluto")// pluto is the DB name this function will automatically create pluto DB

  console.log("connected to DB")
}

module.exports=connectDB

const mongoose=require('mongoose');


async function connectDB() {

// js wont move to next line until this await func is finished
  await mongoose.connect("mongodb+srv://RayanSharma:EagxXguxD3tLz7-@cluster0.hrdlmqk.mongodb.net/Pluto")// pluto is the DB name this function will automatically create pluto DB

  console.log("connected to DB")
}

module.exports=connectDB