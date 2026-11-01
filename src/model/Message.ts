import mongoose, {Schema} from "mongoose"

interface IMessage{
    conversation: mongoose.Types.ObjectId,
    role:"user"|"assistant",
    content: string,
}

const messageSchema = new Schema<IMessage>({
    conversation:{type:Schema.Types.ObjectId,ref:"Conversation",required:true},
    role:{type:String,enum:["user","assistant"],required:true},
    content:{type:String,required:true},
},{timestamps:true});

messageSchema.index({conversation:1,createdAt:1});

export const messageModel = mongoose.model<IMessage>("Message", messageSchema);