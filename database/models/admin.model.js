const mongoose = require ("mongoose")
const validator = require ("validator")
const bcrypt=require("bcrypt")
const adminSchema = mongoose.Schema({

})
adminSchema.pre("save",async function(){
    if(this.isModified("password"))
    this.password=await bcrypt.hash(this.password, 15)
})

const adminModel = mongoose.model("admin",{})
module.exports=adminModel

//dashboard - users(show all users - delete single or all user - rooms (add - edit -delet))