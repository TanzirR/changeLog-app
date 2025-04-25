import express from "express"

const app = express("/", (req,res)=>{
    res.status = 200
    res.json({message: "From the server"})

})

export default app 

