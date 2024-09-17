const express = require("express");

const app = express();

app.use("/", (req, res)=>{
    res.send("Hello from node js")
})

app.listen(3000, ()=>{
    console.log("server listning on port 3000")
})

