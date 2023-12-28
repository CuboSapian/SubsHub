const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.mongoURI , {useNewUrlParser:true})
         console.log("DB connected")
    } catch(error){
        console.log(error);
    }
}

module.exports = connectToMongo;
