require("dotenv").config()
var express = require("express")
var connectedToDatabase = require("./database/db")
var imageRoute = require("./routes/image-routes")
var cors = require("cors")

var app = express ()

connectedToDatabase()

app.use(express.json())

app.use(cors())

app.use("/api/myimages",imageRoute)

var port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("the server is running")
})