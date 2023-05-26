import mongoose from "mongoose";
import Color from "color";
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to databse ${conn.connection.host}`.bgMagenta);
    } catch (error) {
        console.log(`Error in MongoDB  ${error}`.bgRed.white);
        
    }
}
export default connectDB;