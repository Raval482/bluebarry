import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import socket from "./soket"

const Chat = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isReady, setIsReady] = useState(false)

    const currentUser = sessionStorage.getItem("userName")



    const currentUserId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");

    const getRandomColor = () => {
        const colors = [
            "bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500",
            "bg-pink-500", "bg-purple-500", "bg-teal-500", "bg-orange-500",
        ];
        return user
            ? colors[user.name.charCodeAt(0) % colors.length]
            : colors[Math.floor(Math.random() * colors.length)];
    };




    useEffect(() => {
        if (currentUser){
            socket.emit("register", currentUser)
        }
        socket.on("message",(msg)=>{
             setMessages((prev) => [...prev, { fromMe: false, text: msg }]);
        })
        return () => {
            socket.off("message");
        };

    }, [currentUser]);



    useEffect(() => {


        const fetchData = async () => {
            try {
                // Fetch receiver user info
                const userRes = await axios.get(`http://localhost:4000/showoneuser/${id}`, {
                    headers: { Authorization: token }
                });
                setUser(userRes.data.allUser[0]);

                // Fetch chat messages between current user and receiver
                const messageRes = await axios.get(`http://localhost:4000/chat/${currentUserId}/${id}`, {
                    headers: { Authorization: token }
                });

                const formattedMessages = messageRes.data.messages.map(msg => ({
                    text: msg.message,
                    fromMe: msg.sender === currentUserId
                }));

                setMessages(formattedMessages);
                setLoading(false);
                setIsReady(true)
            } catch (error) {
                console.error("Fetch error:", error.message);
                setLoading(false);
            }
        };

        fetchData();

    }, [id, currentUserId, token]);




    const sendMessage = async () => {
        if (message.trim() === "") return;

        try {
            await axios.post("http://localhost:4000/chat", {
                sender: currentUserId,
                receiver: id,
                message
            }, {
                headers: { Authorization: token }
            });

            socket.emit("send-message", { name: user?.name, message })
            setMessages(prev => [...prev, { fromMe: true, text: message }]);
            setMessage("");
        } catch (error) {
            console.error("Message sending failed:", error.message);
        }
    };


    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-600 text-lg">Loading chat...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-600 text-lg">No user found. Please go back and select a valid user.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen max-w-2xl mx-auto border rounded shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-4 bg-gray-100 p-4 border-b">
                <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-xl ${getRandomColor()}`}
                >
                    {user.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
            </div>

            {/* Chat messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-white space-y-3">
                {messages.length === 0 && (
                    <p className="text-gray-400 text-center">Start the conversation!</p>
                )}

                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-xs px-4 py-2 rounded-lg ${msg.fromMe
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-800"
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-4 border-t bg-gray-50">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") sendMessage();
                    }}
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
