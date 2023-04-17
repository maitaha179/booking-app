const mongoose = require ("mongoose")
const validator = require ("validator")
const hotelsSchema = mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    city:{
        type : String,
        required: true
    },
    address:{
        type : String,
        required: true
    },
    images:{
        type : String
    },
    description:{
        type : String,
        required: true,
        min : 10,
        max :30
    },
    rating:{
        type : Number,
        required: true,
        min :1,
        max:5
    },
})
const hotelsModel = mongoose.model("hotel",hotelsSchema)
module.exports=adminModel
