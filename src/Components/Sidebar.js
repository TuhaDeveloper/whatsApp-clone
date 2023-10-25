import React, { useState, useEffect } from 'react'

import SidebarChat from './SidebarChat'
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material'
// import { MoreVertIcon } from '@mui/icons-material/MoreVert'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
// import db from '../Components/firebase'

const Sidebar = () => {

    const [rooms, setRooms] = useState([])


    // useEffect(() => {
    //     db.collection('rooms').onSnapshot(snapshot =>
    //     (
    //         setRooms(snapshot.docs.map(doc =>
    //         ({
    //             id: doc.id,
    //             data: doc.data()
    //         })
    //         ))
    //     ));
    // }, [])


    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar />

                <div className='sidebar-headerleft'>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar-search'>
                <div>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                </div>
                <input type='text' placeholder='search your friends' />
            </div>
            <div className='sidebar-chat'>
                <h2>Add new chat</h2>
                <SidebarChat name='Jahidul Islam' lastTime='last seen at' timestamp='4:35 pm' />
                <SidebarChat name='Deved Jhon' lastTime='last seen at' timestamp='3:55 pm' />
                <SidebarChat name='Iman Gadge' lastTime='last seen at' timestamp='1:20 pm' />


            </div>

        </div>
    )
}

export default Sidebar