const express = require("express")
const app = express()

app.get("/", (req, res)=>{
  res.status(400).json({message: "api is working"})
})

app.listen(3000, ()=>{
  console.log("server is host on http://127.0.0,1:3000")
})
