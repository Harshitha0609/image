var cloudinary = require("../config/cloudinary")

var uploadToCloudinary = async(filepath)=>{
    try{
        var result = await cloudinary.uploader.upload(filepath)
        return{
            url : result.secure_url,
            publicid : result.public_id
        }
    }catch(error){
        
        result.status(401).json({message:"error"})
        console.log("error",error);
        
    }
}
module.exports = uploadToCloudinary