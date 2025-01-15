require("dotenv").config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/login",(req,res)=>{
res.send("Login page")
})
app.get("/insta",(req,res)=>{
res.send("Instagram page")
})
app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})