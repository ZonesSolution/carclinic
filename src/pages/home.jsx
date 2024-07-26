import React from 'react'
import Navbar from '../components/navbar'
import { bannerhome, guarantee, icon, person1, person2, person3 } from '../assets/images'
import Banner from '../components/banner'
import Chat from '../components/chat'
import Contactform from '../components/contactform'
import Footer from '../components/footer'
import { chatimage } from '../assets/images'

const Home = () => {
    const data = [
        {
            id: 1,
            name: 'Jennifer Anderson',
            img: person1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid nulla modi maxime corrupti ipsum, fugiat esse iusto quisquam perspiciatis hic tempora molestias porro."
        },
        {
            id: 2,
            name: 'Emily Davis',
            img: person2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid nulla modi maxime corrupti ipsum, fugiat esse iusto quisquam perspiciatis hic tempora molestias porro.'
        },
        {
            id: 3,
            name: 'Robert Johnson',
            img: person3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid nulla modi maxime corrupti ipsum, fugiat esse iusto quisquam perspiciatis hic tempora molestias porro.'
        },
    ]


    return (
        <>
            <Navbar active={0} />
            <Banner banner={bannerhome} hpart1={'Get Answers to your'} hpart2={'car issues in minutes'} textp1={'We use cutting-edge AI models trained on car manuals,'} textp2={'youtube videos, car forums, and car data on internet to give'} textp3={'customized answers to your car questions in minutes.'} picture={guarantee} />
            <div className='bg-white py-10 flex justify-center'>
                <img src={chatimage} alt="chat-image" />
            </div>
            <Chat />
            <div className='bg-[#011E33] my-20 flex flex-col items-center pb-20 pt-8'>
                <h2 className='text-white text-5xl font-bold py-12 max-sm:text-xl'>Free Advice In Minutes</h2>
                <iframe className='h-[731px] w-[571px] max-sm:h-80 max-sm:w-56' src="https://www.youtube.com/embed/-5MFfr4D-2s?list=TLGGIm8jdYghNnwyNDA0MjAyNA" title="CarClinic Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className='bg-white pb-20 flex flex-col items-center w-full'>
                <h2 className='text-center text-4xl font-bold text-[#011E33] max-sm:text-xl max-sm:px-4'>We have helped 3000+ Customers <br className='max-sm:hidden'></br> What They Are Saying</h2>
                <div className='m-auto'>
                    <div className='mt-8 flex px-8 gap-12 max-sm:flex-col'>
                        {data.map((d) => (
                            <div className='border-2 border-[#011E33] rounded-md' key={d.id}>
                                <div className='flex flex-col px-6 py-8 gap-12'>
                                    <img src={icon} alt="icon" width={40} />
                                    <p>{d.review}</p>
                                </div>
                                <div className='flex items-center gap-4 bg-[#011E33] px-6 py-4'>
                                    {/* <img src={d.img} alt="customer" />
                                    <p className='text-white'>{d.name}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Contactform />
            <Footer />
        </>
    )
}

export default Home