const mongoose = require('mongoose');

async function connectDb(){

    
    try{
        await mongoose.connect(process.env.MONGO_URI,{
           useUnifiedTopology: true

        });
        console.log("Database Connected Successfully!")
    } catch (error){
        console.log(error);
        process.exit(1);
    }

}

module.exports=connectDb;