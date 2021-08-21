const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const bodyParser = require('body-parser')
const pessoasRouter = require("./routers/pessoas")
app.use(express.static(path.join(__dirname,"./public")))

app.use(bodyParser.json())

app.use("/api",pessoasRouter)

app.listen(PORT,()=>{
    console.log('Server Runing on Port:',PORT)
})
