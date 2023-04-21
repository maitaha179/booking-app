const e = require("express");
const userModel = require("../../database/models/user.model");
const {resHandler} = require("../helper")
const {verify}=require("jsonwebtoken")
const auth = async(res,req,next)=>{
   try{ 
    const token= req.header("authorization").replace("bearer " , "")
    const decodedToken = verify (token , process.env.JWTKEY)
    const userData=await userModel.findOne({_id:decodedToken._id, "tokens.token":token})
    if(!userData) throw new Error ("unauthorized")
    req.user=userData
    req.token=token
    next()
    }
    catch(e){
        resHandler(res,500,false,e,"unauthorized")
    }

}
module.exports=auth