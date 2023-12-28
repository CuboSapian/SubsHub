const mongoose=require("mongoose")

const PlanSchema = new mongoose.Schema({
    platform:{
        type: String,
        required: true,
    },
    validity:{
        type: Number,
        required: true,
    },
    amount:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true,
    }
})

const PlanModel= mongoose.model("planDetail" , PlanSchema )
module.exports = PlanModel