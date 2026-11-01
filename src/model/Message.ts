import mongoose, {Schema} from "mongoose"

interface IMessage{
    conversation: mongoose.Types.ObjectId,
    role:string,
    content: string,
}

