import React from 'react'
import { chatimage } from '../assets/images'

const Chat = () => {
  return (
    <>
    <div className='bg-white py-10 flex justify-center'>
        <img src={chatimage} alt="chat-image" />
    </div>
    <button className='bg-[#011E33] font-bold w-full py-8 text-[#bdbdbd] text-4xl max-sm:text-xl'>Click Here To Chat With Us</button>
    </>
  )
}

export default Chat