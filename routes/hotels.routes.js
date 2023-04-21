const router = require ("express").Router()
const hotelController = require("../app/controller/hotels.controller")
const auth = require ("../app/middleware/auth")
const upload=require("../app/middleware/upload.middleware")

router.post ("/add",hotelController.add)
router.post("/hotels/uploadpic",upload.single('photos'),hotelController.uploadPic)

router.get ("/hotels/all",hotelController.all)
router.get ("/hotels/single/:id",hotelController.single)

router.patch ("/update/:id",hotelController.update)

router.delete ("/hotels/delete/:id",hotelController.delete)
router.delete ("/hotels/deleteall",hotelController.deleteAll)



module.exports=router