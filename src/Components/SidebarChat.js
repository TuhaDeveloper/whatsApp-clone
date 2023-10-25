import React from 'react'
import './sidebarchat.css'
import { Avatar } from '@mui/material'

const SidebarChat = ({ name, lastTime, timestamp }) => {
    return (
        <div >
            <div className='chat-user'>
                <Avatar />
                <div className='chat-user-des'>
                    <h4>{name}</h4>
                    <p>{lastTime} <span className='timestamp'>{timestamp}</span></p>
                </div>
            </div>
        </div>
    )
}

export default SidebarChat