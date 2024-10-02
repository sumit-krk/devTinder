const express = require("express");

const app = express();

//route order important in node.js and also exact match of route

app.get("/user", (req,res)=>{
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

