const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        await(mongoose.connect(process.env.MONGO_URI));
        console.log("MOngo Db is Connected")
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDb;