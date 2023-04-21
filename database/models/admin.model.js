const mongoose = require ("mongoose")
const validator = require ("validator")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const adminSchema = mongoose.Schema({
    fname:{
        type:String,
        trim :true,
        required: true,
    },
    lname:{
        type:String,
        trim : true,
        required: true,
    },
    adress :{
        type:String,
        trim : true,
        required: true,
    },
    age:{
        type:Number,
        required: true,
    },
    email:{
        type:String,
        trim:true,
        required: true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },
    password:{
        type:String,
        trim : true,
        required: true,
    },
    phone:{
        type:String,
        trim:true,
        validate(value){
             if(!validator.isMobilePhone(value, 'ar-EG'))
            throw new Error("invalid phone number")
        }
    },
    tokens:[
        {token:{
            type:String,
            required:true,
        }
    }
    ]


})
adminSchema.pre("save",async function(){
    if(this.isModified("password"))
    this.password=await bcrypt.hash(this.password, 15)
})
adminSchema.statics.login=async(email , password)=>{
    const adminData=await adminModel.findOne({email:email})
    if(!adminData) throw new Error("invalid email")
    const matched = await bcrypt.compare(password, adminData.password)
    if(!matched) throw new Error("invalid Password")
    return adminData
}
adminSchema.methods.generateToken=async function(){
const token=jwt.sign({_id:this._id}, process.env.JWT)
this.tokens.push({token})
await this.save()
}

const adminModel = mongoose.model("admin",adminSchema)
module.exports=adminModel

//dashboard - users(show all users - delete single or all user - rooms (add - edit -delet))