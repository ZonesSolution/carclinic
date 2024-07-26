import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Chat from '../components/chat'
import Banner from '../components/banner'
import { carclinicpro, feature1, feature2, feature3, feature4, free } from '../assets/images'
import Contactform from '../components/contactform'
import { Link } from 'react-router-dom'
import { chatimage } from '../assets/images'

const Carclinicpro = () => {
    return (
        <>
            <Navbar active={1} />
            <Banner banner={carclinicpro} hpart1={'Carclinic pro - beta'} textp1={'We are using AI to build the ultimate car repair database for technicians'} textp2={'you can get to the information you need without having to click through endless pages'} textp3={'just type the question and get the answers.'} picture={free} />
            <div className='bg-white py-10 flex justify-center'>
                <img src={chatimage} alt="chat-image" />
            </div>
            <Chat />
            <div className='flex flex-col gap-6 py-16'>
                <h2 className='text-center text-4xl max-sm:text-xl max-sm:px-2 font-bold text-[#011E33]'>Key Features</h2>
                <h2 className='text-center text-4xl max-sm:text-xl max-sm:px-2 font-bold text-black'>Perlimary Diagnosis & Advanced Troubleshooting</h2>
                <div className='flex px-20 max-sm:px-8 gap-8 max-sm:flex-col'>
                    <div className='w-1/4 max-sm:w-full bg-[#011E33] text-white flex flex-col items-center px-4 py-8 gap-2 rounded-md'>
                        <img src={feature1} alt="feature" />
                        <h4 className='font-medium text-center'>preliminary diagnosis</h4>
                        <p className='text-center'>Our tool offers a preliminary diagnosis by analyzing the car’s make and model, reported symptoms, and known issues associated with the vehicle.</p>
                    </div>
                    <div className='w-1/4 max-sm:w-full bg-[#011E33] text-white flex flex-col items-center px-4 py-8 gap-2 rounded-md'>
                        <img src={feature2} alt="feature" />
                        <h4 className='font-medium text-center'>Easy Access to Information from Car & OEM Manuals</h4>
                        <p className='text-center'>Leveraging a comprehensive database compiled from decades of data from car forums, OEM manuals, and repair guides, you can get answers in seconds instead of clicking through hundreds of pages in a complicated database.</p>
                    </div>
                    <div className='w-1/4 max-sm:w-full bg-[#011E33] text-white flex flex-col items-center px-4 py-8 gap-2 rounded-md'>
                        <img src={feature3} alt="feature" />
                        <h4 className='font-medium text-center'>Access to TSBs and Wiring Diagrams</h4>
                        <p className='text-center'>Gain access to technical service bulletins, easy-to-understand wiring diagrams, and much more.</p>
                    </div>
                    <div className='w-1/4 max-sm:w-full bg-[#011E33] text-white flex flex-col items-center px-4 py-8 gap-2 rounded-md'>
                        <img src={feature4} alt="feature" />
                        <h4 className='font-medium text-center'>Upload Audio and Image</h4>
                        <p className='text-center'>With our platform you are able to upload audio and images, which we can use to help you solve any complex car issues you are dealing with.</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link to={'https://forms.gle/8bN8fBLPYxpTW5es6'}>
                        <button className='text-white bg-[#011E33] px-[30px] py-[10px] text-xl font-bold rounded-md'>JOIN WAITLIST</button>
                    </Link>
                </div>
            </div>
            <Contactform />
            <Footer />
        </>
    )
}

export default Carclinicpro