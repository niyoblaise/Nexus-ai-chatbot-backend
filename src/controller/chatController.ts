import express from "express"
import {conversationModel} from "../model/Conversation.js";
import {messageModel} from "../model/Message.js";

export const sendMessage = async(req:express.Request,res:express.Response) =>{
    try{
        const{message,conversationId} = req.body
        if(!message || typeof message !== "string"||!message.trim()){
            return res.status(400).json({
                message: "Message is required"
            });
        }
        let conversation
        if(conversationId){
            conversation = await conversationModel.findById(conversationId)
            if(!conversation){
                return res.status(404).json({
                    message: "Conversation not found"
                });
            }
        }else{
            conversation = await conversationModel.create({
                title:message.trim().slice(0,20)
            })
        }

        await messageModel.create({
            conversation:conversation._id,
            role:"user",
            content:message.trim()
        })


        const history = await messageModel.find({conversation:conversation._id}).sort({createdAt:-1}).limit(20)

        return res.status(200).json({message: "User message saved successfully", conversationId: conversation._id, history: history.reverse()});
    }catch(e){

    }
}