const express = require("express");
const {connectDB} = require("./config/database")
const app = express();
const User = require("./models/user")

app.use(express.json());

app.post("/signup", async(req, res)=>{
    const userObj = new User(req.body)

    try{
        await userObj.save();
        res.send('User Added successfully')
    } catch(err){
        res.status(400).send("Error while saving the user" + err.message)
    }
})

// to get data api
app.get("/feed", async (req,res)=>{
    try{
        const allUser= await User.find();
        res.status(200).send(allUser)
    } catch(err){
        res.status(400).send("Error while saving the user" + err.message)
    }
})

// to get user by mail
app.get("/singleUser",async (req, res)=>{
    const mailId=req.body.emailId;
    try{
        const user= await User.find({emailId:mailId});
        if(user.length===0){
            res.status(400).send("Users not found");
        }
        else{
            res.send(user);
        }
    } catch(err) {
        res.status(400).send("something went wrong");
    }
})

app.patch("/user", async(req, res)=>{
    const userId= req.body.userId;
    const data=req.body;
    try{
        const user=await User.findByIdAndUpdate({_id:userId}, data, {returnDocument:"after"});
        console.log(user);
        res.send("User Updated Successfully");
    } catch(err){
        res.status(400).send("something went");
    }
})

app.delete("/user", async(req, res)=>{
    try{
        const userId= req.body.userId;
        await User.findByIdAndDelete({_id:userId})
        res.status(200).send("Data deleted successfully...")
    } catch(err){
        res.status(400).send("something went wrong");
    }
    
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

