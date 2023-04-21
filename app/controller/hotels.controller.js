const hotelModel=require("../../database/models/hotels.model")
const helper=require("../helper")
const fs = require ("fs")

class hotel{
    static add = async (req,res)=>{
        try{
            const hotelData= new hotelModel({
                //userId:req.user._id,
                ...req.body
            })
            await hotelData.save()
            helper.resHandler(res,200,true,hotelData, "added successfully")
        }
        catch(e){
            helper.resHandler(res,500,false,e.message, "add failed")
        }
    }
    static all = async (req,res)=>{
        try{
            const allHotels= await hotelModel.find()
            helper.resHandler(res,200,true,allHotels, "all hotels showed")
        }
        catch(e){
            helper.resHandler(res,500,false,e, e.message)
        }

    }
    static single= async (req,res)=>{
        try{
            const hotelData=await hotelModel.findById(req.params.id)
            helper.resHandler(res,200,true,hotelData,"hotel showed")
        }
        catch(e){
            helper.resHandler(res,500,false,e.message,"error showing this hotel")
        }
    }
    static update = async (req,res)=>{
        try{
            const hotelData = await hotelModel.findByIdAndUpdate(req.params.id,req.body,{runValidators:true})
            helper.resHandler(res, 200, true, hotelData, "data edited")
        }
        catch(e){
            helper.resHandler(res, 500, false, e, "Error editing data")
        }

    }
    static delete = async (req,res)=>{
        try{
            const hotelData=await userData.findByIdAndDelete()
            helper.resHandler(res,200,true,hotelData,"hotel deleted")
        }
        catch(e){
            helper.resHandler(res,500,false,message,"error deleting hotel")
        }

    }
    static deleteAll = async (req,res)=>{
        try{
            const hotelData=await hotelData.deleteMany()
            helper.resHandler(res,200,true,hotelData,"all hotels deleted")
        }
        catch(e){
            helper.resHandler(res,500,false,e,"error deleting hotels")
        }
    }
    static uploadPic= async (req,res)=>{
        try{
            const ext = req.file.originalname.split(".").pop()
            const newName = req.file.path+"."+ext
            fs.renameSync(req.file.path,newName)
            req.hotels.images=newName
            req.hotels.save()
            helper.resHandler(res,200,true,req.hotel,"done")
        }
        catch(e){
            helper.resHandler(res,500,false,e.message,"error uploading file")
        }

    }
}
module.exports=hotel