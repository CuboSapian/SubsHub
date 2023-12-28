const mongoose=require("mongoose")

const DetailsSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
        // unique: true
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    platform:{
        type: String,
        required: true
    }
})

const DetailsModel= mongoose.model("userdetails" , DetailsSchema )
module.exports = DetailsModel