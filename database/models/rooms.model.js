const mongoose = require ("mongoose")
const { boolean } = require("yargs")
const roomsSchema = mongoose.Schema({
    type:{
        type : String,
        required: true
    },
    bedsNum:{
        type : Number,
        required: true
    },
    status :{
        type : boolean,
        default :false
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
    view:{
        type : String,
        required: true,
        
    },
    price:{
        type :Number,
        required : true,
        
    }
})
const hotelsModel = mongoose.model("hotel",hotelsSchema)
module.exports=adminModel
