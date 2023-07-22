import mongoose from "mongoose";
// create mongoose connection
mongoose.set('strictQuery', true);
const mongoDBConnect = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_SETRING);
        console.log(`Mongo DB connection Done`.bgBlue.black);
    } catch (error) {
        console.log(`error`.bgRed.black);
    }
}

export default mongoDBConnect