const mongoose = require ("mongoose")
const validator = require ("validator")
const hotelsSchema = mongoose.Schema({
   userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    name:{
        type : String,
        required: true,
        trim:true
    },
    city:{
        type : String,
        required: true,
        trim:true
    },
    phone:{
        type:String,
        trim:true,
        validate(value){
             if(!validator.isMobilePhone(value, 'ar-EG'))
            throw new Error("invalid phone number")
        }
    },
    address:{
        type : String,
        required: true,
        trim: true
    },
    images:{
        type : String,
        trim: true
    },
    description:{
        type : String,
        trim: true,
        required: true,
        minlength : 3,
        maxlength :30
    },
    rating:{
        type : Number,
        required: true,
        min :1,
        max:5
    },
    rooms:[
        {
            type: {
                type : String,
                enum :["single" , "double ", "suite"]
            },
            num:{
                type: Number
            },
            status :{
                type : Boolean,
                default :false
            },
            view :{
                type: String,
                enum : ["seaview", "poolview"]
            }
        
        }
    ]
})
const hotelsModel = mongoose.model("hotel",hotelsSchema)
module.exports=hotelsModel
