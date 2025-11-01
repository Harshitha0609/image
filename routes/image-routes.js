var express = require ("express")
var uploadImage = require ("../controllers/image-controller")
var upload = require("../middleware/image-middleware")
var router = express.Router()
router.post("/uploads",upload.single("image"),uploadImage)
module.exports=router