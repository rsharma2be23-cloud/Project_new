const mongoose=require('mongoose');


async function connectDB() {


  await mongoose.connect("mongodb+srv://RayanSharma:EagxXguxD3tLz7-@cluster0.hrdlmqk.mongodb.net/Pluto")

  console.log("connected to DB")
}