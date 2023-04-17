const router = require ("express").Router()
const admin = require("../app/controller/admin.controller")

router.get ("/all" , admin.showAll)
router.get ("/single/:id" , admin.showSingle)

router.delete("/single/:id", admin.deleteOne)
router.delete("/all", admin.deleteAll)

router.patch("/edit",admin.edit)

module.exports=router