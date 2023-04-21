
const userModel = require("../../database/models/user.model")
const bcrypt=require("bcrypt")
const helper= require("../helper")

class user{
    static register= async (req,res)=>{
        try{
            const userData= new userModel(req.body)
            await userData.save()
            helper.resHandler(res,200,true,userData,"user added successfully")
        }
        catch(e){
            helper.resHandler(res,500,false,e,"error adding user")
        }

    }
    static login = async (req,res)=>{
        try{
            const userData= await userModel.login(req.body.email , req.body.password)
            const token = await userData.generateToken()
            helper.resHandler(res, 200, true, {userData,token}, "logged in")
        }
        catch(e){
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static profile = async (req,res)=>{
        helper.resHandler(res,200,true,req.user)
    }
    static logOut = async (req,res)=>{
        try{
            req.user.tokens=req.user.token.filter(t=>t.token != req.token)
           await req.user.save()
           helper.resHandler(res,200,true,{},"logged out")
        }
        catch(e){
            helper.resHandler(res, 500, false, e, "faild logging out")
        }
    }
    static reservation=async(req,res)=>{

    }
    static checkout = async (req,res)=>{
        
    }

}
module.exports=user