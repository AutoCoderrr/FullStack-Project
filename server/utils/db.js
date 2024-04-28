// const mongoose = require(mongoose);
import { mongoose , connect, model} from 'mongoose';


const URL = 'mongodb://127.0.0.1:27017/login_admin';
// mongoose.connect(URL);


const connectdatabase = async(req,res)=>{
    try{
        await mongoose.connect(URL);
        console.log("connected to database ");

    }
    catch(error){
        console.error("error connecting database ");
        // process.exit(0);

    }
};


export default connectdatabase;