import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const dbConnect = async()=>{
    try{

        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("Mongo db connected")
    }catch(e){
        console.error(e)
    }
}