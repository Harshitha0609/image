var image = require ("../model/image")
var uploadToCloudinary = require("../helper/cloudinary-helper")
var uploadImage = async (req,res)=>{
    try{
        if(!req.file){
            return res.status(401).json({message: "file missing"})

        }
        var {url,publicid} = await uploadToCloudinary(req.file.path)
        var newImage = new image({
            url,publicid
        })
        await newImage.save()
        res.status(201).json({Message : "new image added"})
    }catch(error){
        res.status(401).json({message : "error"})
        console.log("error",error)
    }
}
module.exports = uploadImage