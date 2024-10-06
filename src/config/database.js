const mongoose = require("mongoose")

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://redbus:namaste_node@cluster0.ome2c.mongodb.net/devTinder")
}

module.exports={connectDB}