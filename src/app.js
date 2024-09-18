const express = require("express");

const app = express();

app.get("/user", (req,res)=>{
    res.send({firstName: "sumit", lastName:"Kumar"})
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

app.listen(3000, ()=>{
    console.log("server listning on port 3000")
})

