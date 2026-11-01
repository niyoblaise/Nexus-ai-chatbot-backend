import mongoose, {Schema} from 'mongoose';

interface IConversation {
    title: string;
}

const conversationSchema = new Schema<IConversation>({
    title: { type: String, required: true },
},{timestamps: true});

