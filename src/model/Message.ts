import mongoose, {Schema} from "mongoose"

interface IMessage{
    conversation: mongoose.Types.ObjectId,
    role:string,
    content: string,
}

const MessageSchema = new Schema<IMessage>({
    conversation:{type:Schema.Types.ObjectId,ref:"Conversation",required:true},
    role:{type:String,enum:["user","assistant"],required:true},
    content:{type:String,required:true},
},{timestamps:true});

export const messageModel = mongoose.model("Message", MessageSchema);