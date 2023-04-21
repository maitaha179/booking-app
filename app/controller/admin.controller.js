//const { help } = require("yargs")
const adminModel = require("../../database/models/admin.model")
const userModel = require("../../database/models/user.model")
const helper= require("../helper")

class admin {
    static register= async (req,res)=>{
        try{
            const adminData= new adminModel(req.body)
            await adminData.save()
            helper.resHandler(res,200,true,adminData,"admin added successfully")
        }
        catch(e){
            helper.resHandler(res,500,false,e.message,"error adding admin")
        }

    }
    static login = async (req,res)=>{
        try{
            const adminData= await adminModel.login(req.body.email , req.body.password)
            const token = await adminData.generateToken()
            helper.resHandler(res, 200, true, {adminData,token}, "logged in")
        }
        catch(e){
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static logOut = async (req,res)=>{
        try{
            req.admin.tokens=req.admin.token.filter(t=>t.token != req.token)
           await req.admin.save()
           helper.resHandler(res,200,true,{},"logged out")
        }
        catch(e){
            helper.resHandler(res, 500, false, e, "faild logging out")
        }
    }
    static showAll= async (req,res)=>{
        try{
           const userData=await userModel.find()
            helper.resHandler(res,200,true,userData,"all users showed")
        }
        catch(e){
            helper.resHandler(res,500,false,e.message,"error showing all users")
        }
    }
    static showSingle= async (req,res)=>{
        try{
            const userData=await userModel.findById(req.params.id)
            helper.resHandler(res,200,true,userData,"user showed")
        }
        catch(e){
            helper.resHandler(res,500,false,e.message,"error showing this user")
        }
    }
    static deleteOne= async (req,res)=>{
        try{
            const userData=await userData.findByIdAndDelete()
            helper.resHandler(res,200,true,userData,"user deleted")
        }
        catch(e){
            helper.resHandler(res,500,false,message,"error deleting user")
        }
    }
    static deleteAll= async (req,res)=>{
        try{
            const userData=await userData.deleteMany()
            helper.resHandler(res,200,true,userData,"user deleted")
        }
        catch(e){
            helper.resHandler(res,500,false,e,"error deleting user")
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