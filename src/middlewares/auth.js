const userAuth=(req, res, next)=>{
    if(false){
        next();
    }
    else{
        res.status(401).send("Auth failed")
    }
}

module.exports={userAuth}