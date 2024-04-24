import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Chat from '../components/chat'
import Banner from '../components/banner'
import { carclinicpro, feature1, feature2, feature3, feature4 } from '../assets/images'
import Contactform from '../components/contactform'

const Carclinicpro = () => {
    return (
        <>
            <Navbar />
            <Banner banner={carclinicpro} hpart1={'Carclinic pro - beta'} textp1={'We offering well-trained mechanics and excellent customer'} textp2={'service, all at competitive prices of vehicle repairs at your home'} textp3={'or place of work'} />
            <Chat />
            <div className='flex flex-col gap-6 py-16'>
                <h2 className='text-center text-4xl font-bold text-[#011E33]'>Key Features</h2>
                <h2 className='text-center text-4xl font-bold text-black'>Perlimary Diagnosis & Advanced Troubleshooting</h2>
                <div className='flex px-20 gap-8'>
                    <div className='w-1/4 bg-[#011E33] text-white flex flex-col items-center px-4 py-8 gap-2 rounded-md'>
                        <img src={feature1} alt="feature" />
                        <p className='text-center'>Our tool offers a preliminary diagnosis by analyzing the car’s make and model, reported symptoms, and known issues associated with the vehicle.</p>
                    </div>
                    <div className='w-1/4 bg-[#011E33] text-white flex flex-col items-center px-4 py-8 gap-2 rounded-md'>
                        <img src={feature2} alt="feature" />
                        <p className='text-center'>Leveraging a comprehensive database compiled from decades of data from car forums, OEM manuals, and repair guides, we accurately pinpoint probable causes of your car’s problems and help you troubleshoot possible causes</p>
                    </div>
                    <div className='w-1/4 bg-[#011E33] text-white flex flex-col items-center px-4 py-8 gap-2 rounded-md'>
                        <img src={feature3} alt="feature" />
                        <p className='text-center'>We are also excited to announce the development of a fully operational version of our tool. This enhanced version will include wiring diagrams and support for uploading audio and images during the diagnostic process, among other innovative features.</p>
                    </div>
                    <div className='w-1/4 bg-[#011E33] text-white flex flex-col items-center px-4 py-8 gap-2 rounded-md'>
                        <img src={feature4} alt="feature" />
                        <p className='text-center'>Our goal is to provide you with a more interactive and detailed diagnostic experience. Please share your feedback with us by clicking contact us at the bottom.</p>
                    </div>
                </div>
            </div>
            <Contactform />
            <Footer />
        </>
    )
}

export default Carclinicpro