import React, { useState } from 'react';
import './chat.css'
import { Avatar, IconButton } from '@mui/material'
import { SearchOutlined, AttachFile, MoreVert, SendAndArchive, SendOutlined, InsertEmoticon, MicOutlined } from '@mui/icons-material'






const Chat = () => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);



    const handleSendMessage = (e) => {
        e.preventDefault();
        // console.log('you typed >>', message)
        if (message.trim() === '') {
            return;
        }

        // Create a new message object with a unique ID      
        const newMessage = {
            id: Date.now(),
            text: message,
        };

        // Add the new message to the messages array
        setMessages([...messages, newMessage]);

        // Clear the input field
        setMessage('');
    };

    return (
        <div className='chatbox'>
            <div className='chat-header'>
                <Avatar />
                <div className='chat-headerInfo'>
                    <h3>Ali Abdal</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className='chat-headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat-body'>
                {
                    messages.map((msg) => {
                        return <p className={`chat-message ${true && "chat-reciever"}`}>
                            <span className='chat-name'>Ali Abdal</span>
                            <span>{msg.text}</span>
                            <span className='chat-timestamp'>4:34 pm</span>
                        </p>

                    })
                }


            </div>
            <div className='chat-footer'>
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <div className='chat-input'>
                    <input type='text' placeholder='Type a message' value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit" onClick={handleSendMessage}>
                        <IconButton>
                            <SendOutlined />
                        </IconButton>
                    </button>
                </div>
                <IconButton>
                    <MicOutlined />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat