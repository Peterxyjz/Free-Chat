import mongoose from "mongoose";

const coversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        }
    ]
}, {timestamps: true});//createAdt , UpdateAt

const Conversation = mongoose.model("Conversation", coversationSchema);

export default Conversation;