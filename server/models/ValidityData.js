const mongoose=require("mongoose")

const ValiditySchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    platform:{
        type: String,
        required: true,
    },
    expiryDate:{
        type: Date,
        required: true
    }
})

const ValidityModel= mongoose.model("validitydata" , ValiditySchema )
module.exports = ValidityModel