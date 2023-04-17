const router = require ("express").Router()
const hotelController = require("../app/controller/hotels.controller")

router.post ("/add",hotelController.add)

router.get ("/all",hotelController.all)
router.get ("/single",hotelController.single)

router.patch ("/update",hotelController.update)

router.delete ("/delete",hotelController.delete)



module.exports=router