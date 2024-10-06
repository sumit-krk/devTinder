const mongoose = require("mongoose")

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://redbus:namaste_node@cluster0.ome2c.mongodb.net/")
}

connectDB().then(()=>{
    console.log("DataBase Connected..")
}).catch((err)=>{
    console.log("Not able to connect, plz check")
})