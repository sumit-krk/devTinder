const express = require("express");
const {connectDB} = require("./config/database")
const app = express();
const User = require("./models/user")

app.post("/signup", async(req, res)=>{
    const userObj = new User({
        firstName:'sumit',
        lastName:'kumar',
        emailId: "sumit@gmail.com",
        password: "Sumit@123"
    })

    await userObj.save();
    res.send('User Added successfully')
})


connectDB().then(()=>{
    console.log("DataBase Connected..")
    app.listen(7000, ()=>{
        console.log("server listning on port 7000")
    })
}).catch((err)=>{
    console.log("Not able to connect, plz check")
})




















//route order important in node.js and also exact match of route

// app.use("/admin", userAuth)

// app.post("/admin/login", (req, res)=>{
//     try{
//         throw new Error("User Data not found")
//         res.status(201).send("Login success")
//     }catch(err){
//         res.status(500).send("Something went wrong plz connect support teams")
//     }
// })

// app.delete("/admin/delete", (req, res)=>{
    
// })
// app.use("/medleware", (req, res, next)=>{
//     console.log("1st Response")
//     next()
// }, (req, res, next)=>{
//     console.log("2nd response")
//     res.send("sending 2nd response")
// })

// app.get("/user", userAuth, (req,res)=>{
//     console.log(req.query)
//     res.send({firstName: "sumit", lastName:"Kumar"})
// })

// app.get("/subject/:name/:teacher",(req,res)=>{
//     console.log(req.params)
//     res.send("get Teacher Details")
// })

// app.post("/user", (req,res)=>{
//     res.send("Data Send SuccesFully")
// })

// app.delete("/user", (req,res)=>{
//     res.send("user Deleted Successfully")
// })

// app.put("/user", (req,res)=>{
//     res.send("user Data Updated Successfully")
// })

// app.use("/", (err, req, res, next)=>{
//     if(err){
//         res.status(500).send("something went wrong!!")
//     }
// })

