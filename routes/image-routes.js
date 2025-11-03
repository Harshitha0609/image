var express = require ("express")
var {uploadImage,getAllImages, getSingleImage} = require ("../controllers/image-controller")
var upload = require("../middleware/image-middleware")
var router = express.Router()
router.post("/uploads",upload.single("image"),uploadImage)
router.get("/getallimages",getAllImages)
router.get("/singleimage/:id",getSingleImage)
module.exports=router