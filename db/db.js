const mongoose = require('mongoose');

async function connectDb(){
// git clone
// code copy / chANGE
// git add .
// git comit 
// git push

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