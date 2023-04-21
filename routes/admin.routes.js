const router = require ("express").Router()
const admin = require("../app/controller/admin.controller")
const adminauth=require("../app/middleware/adminauth")

router.post ("/admin/register" , admin.register)
router.post ("/admin/login" , admin.login)
router.post ("/logout",adminauth , admin.logOut)

router.get ("/all" , admin.showAll)
router.get ("/single/:id" , admin.showSingle)

router.delete("/single/:id", admin.deleteOne)
router.delete("/all", admin.deleteAll)

router.patch("/edit",admin.edit)

module.exports=router