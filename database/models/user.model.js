const mongoose = require ("mongoose")
const validator = require ("validator")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const userSchema = mongoose.Schema({
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
userSchema.pre("save",async function(){
    if(this.isModified("password"))
    this.password=await bcrypt.hash(this.password, 15)
})
userSchema.statics.login=async(email , password)=>{
    const userData=await userModel.findOne({email:email})
    if(!userData) throw new Error("invalid email")
    const matched = await bcrypt.compare(password, userData.password)
    if(!matched) throw new Error("invalid Password")
    return userData
}
userSchema.methods.generateToken=async()=>{
const token=jwt.sign({_id:this._id}, process.env.JWT)
this.tokens.push({token})
await this.save()
}
const userModel = mongoose.model("user",userSchema)
module.exports=userModel

// loggin - register - search - rooms and hotel details - checkout 