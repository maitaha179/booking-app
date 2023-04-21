const express = require("express")
const app = express ()
const path = require("path")
const cors = require("cors")

require("../database/connection")

app.use(express.static(path.join(__dirname,"../public")))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes=require("../routes/user.routes")
const adminRoutes=require("../routes/admin.routes")
const hotelsRoutes=require("../routes/hotels.routes")
//const { require } = require("yargs")
const exp = require("constants")

app.use(userRoutes)
app.use(adminRoutes)
app.use(hotelsRoutes)

app.all("*",(req,res)=>{
    res.status(404).send({
        apiStatus:false,
        data:null,
        message:"Page not found"
    })
})

module.exports=app