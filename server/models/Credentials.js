const mongoose=require("mongoose")

const CredentialSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const CredentialModel= mongoose.model("usercreds" , CredentialSchema )
module.exports = CredentialModel