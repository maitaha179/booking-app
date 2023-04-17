const router = require ("express").Router()
const userController = require ("../app/controller/user.controller")
const auth=require("../app/middleware/auth")

router.post ("/register" , userController.register)
router.post ("/login" , userController.login)
router.post ("/logout",auth , userController.logOut)

router.get ("/myprofile" , auth , userController.profile)



module.exports=router