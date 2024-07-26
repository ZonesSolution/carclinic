import React, { useState } from 'react'
import { send } from '../assets/images'

const Chat = () => {
  const [openChat, setOpenChat] = useState(false)

  const startChat = () => {
    setOpenChat(true)
  }

  const endChat = () => {
    setOpenChat(false)
  }

  return (
    <>
      {!openChat && <button onClick={startChat} className='bg-[#011E33] font-bold w-full py-8 text-[#bdbdbd] text-4xl max-sm:text-xl'>Click Here To Chat With Us</button>}
      {openChat &&
        <div className='w- px-4'>
          <div className='bg-[#011e33] flex justify-end py-4 px-4 rounded-tl-2xl rounded-tr-2xl'>
            <p onClick={endChat} aria-label='end-chat' className='text-white font-bold text-2xl cursor-pointer'>X</p>
          </div>
          <div className='bg-gray-50 h-80'>
            {/* in this the messages will be displayed */}
          </div>
          <div className='bg-[#011e33] flex py-4 px-4 rounded-bl-2xl rounded-br-2xl gap-6'>
            <input
              className='border px-2 py-2 rounded-md w-full'
              type="text"
              placeholder='Message'
              name="Message"
              required
            />
            <div className='bg-white rounded-xl p-2 cursor-pointer shadow-md'>
              <img src={send} width={30} alt="Send" />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Chat