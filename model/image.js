var mongoose = require("mongoose")

var imageSchema = new mongoose.Schema({
    url: {
        type : String,
        required : true
    },
    publicid : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Images",imageSchema)