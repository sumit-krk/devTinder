const express = require("express");

const app = express();
const {userAuth} = require("./middlewares/auth")

//route order important in node.js and also exact match of route

app.use("/admin", userAuth)

app.post("/admin/login", (req, res)=>{
    res.status(201).send("Login success")
})

app.delete("/admin/delete", (req, res)=>{
    
})
app.use("/medleware", (req, res, next)=>{
    console.log("1st Response")
    next()
}, (req, res, next)=>{
    console.log("2nd response")
    res.send("sending 2nd response")
})

app.get("/user", userAuth, (req,res)=>{
    console.log(req.query)
    res.send({firstName: "sumit", lastName:"Kumar"})
})

app.get("/subject/:name/:teacher",(req,res)=>{
    console.log(req.params)
    res.send("get Teacher Details")
})

app.post("/user", (req,res)=>{
    res.send("Data Send SuccesFully")
})

app.delete("/user", (req,res)=>{
    res.send("user Deleted Successfully")
})

app.put("/user", (req,res)=>{
    res.send("user Data Updated Successfully")
})

app.listen(7000, ()=>{
    console.log("server listning on port 3000")
})

