//const { help } = require("yargs")
const adminModel = require("../../database/models/admin.model")
const userModel = require("../../database/models/user.model")
const helper= require("../helper")

class admin {
    static showAll= async (req,res)=>{
        try{
            userData=await userData.find()
            helper.resHandler(res,200,true,userData,"all users showed")
        }
        catch(e){
            helper.resHandler(res,500,false,message,"error showing all users")
        }
    }
    static showSingle= async (req,res)=>{
        try{
            userData=await userData.findById(req.params.id)
            helper.resHandler(res,200,true,userData,"user showed")
        }
        catch(e){
            helper.resHandler(res,500,false,message,"error showing this user")
        }
    }
    static deleteOne= async (req,res)=>{
        try{
            userData=await userData.findByIdAndDelete()
            helper.resHandler(res,200,true,userData,"user deleted")
        }
        catch(e){
            helper.resHandler(res,500,false,message,"error deleting user")
        }
    }
    static deleteAll= async (req,res)=>{
        try{
            userData=await userData.deleteMany()
            helper.resHandler(res,200,true,userData,"user deleted")
        }
        catch(e){
            helper.resHandler(res,500,false,message,"error deleting user")
        }
    }
    static edit=async(req,res)=>{
        try{
            const userData = await adminModel.findById(req.params.id)
            for(let key in req.body)
            {userData[key]=req.body[key]}
            await userData.save()
            helper.resHandler(res, 200, true, userData, "data edited")
        }
        catch(e){
            helper.resHandler(res, 500, false, e, "Error editing data")
        }
    }
}
module.exports = admin