import mongoose, {Schema} from 'mongoose';

interface IConversation {
    title: string;
}

const conversationSchema = new Schema<IConversation>({
    title: { type: String, required: true,default:"New conversation" },
},{timestamps: true});

export const conversationModel = mongoose.model<IConversation>("Conversation", conversationSchema);