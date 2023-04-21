const e = require("express");
const adminModel = require("../../database/models/admin.model");
const {resHandler} = require("../helper")
const {verify}=require("jsonwebtoken")
const auth = async(res,req,next)=>{
   try{ 
    const token= req.header("authorization").replace("bearer " , "")
    const decodedToken = verify (token , process.env.JWTKEY)
    const adminData=await userModel.findOne({_id:decodedToken._id, "tokens.token":token})
    if(!adminData) throw new Error ("unauthorized")
    req.admin=adminData
    req.token=token
    next()
    }
    catch(e){
        resHandler(res,500,false,e,"unauthorized")
    }

}
module.exports=auth