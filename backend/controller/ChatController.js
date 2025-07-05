const ChatModel = require("../model/ChatModal");

const sendMessage = async (req, res) => {
    try {
        const { sender, receiver, message, type } = req.body;

        const newMessage = new ChatModel({
            sender,
            receiver,
            message,
        });

        const savedMessage = await newMessage.save();
        

        res.status(200).json({ success: true, message: "Message sent", data: savedMessage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};



const getChatBetweenUsers = async (req, res) => {
    try {
        const { senderId, receiverId } = req.params;

        const messages = await ChatModel.find({
            $or: [
                { sender: senderId, receiver: receiverId },
                { sender: receiverId, receiver: senderId }
            ]
        }).sort({ timestamp: 1 });

        return res.status(200).json({ success: true, messages });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};




module.exports = {
    sendMessage,
    getChatBetweenUsers
}