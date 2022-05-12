import mongoose from 'mongoose';

const DBConnectionString = 'mongodb+srv://Amoghjkul21:dbMongo21@cluster0.wyi55.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}


const connectToDB = () =>{
    try{  
        mongoose.connect(DBConnectionString, connectionParams)
        .then(()=>{
            console.log("connected to database");
        })
        .catch((error=>{
            console.log("Error occured ", error);
        }))
    }
    catch(error){
        console.log("Coudn't connect to DB ", error);
    }
}


export default connectToDB
