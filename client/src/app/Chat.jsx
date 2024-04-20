import React from 'react'
import Sidebar from '../components/Sidebar';
import Chatbody from '../components/Chatbody';
const Chat = () => {
  return (
    <>
    <div className='flex contain'>
      <Sidebar/>
      <Chatbody/>
    </div>
    </>
  )
}

export default Chat;