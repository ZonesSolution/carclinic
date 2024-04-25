import React from 'react'
import Navbar from '../components/navbar'
import { bannerhome, icon, person1, person2, person3 } from '../assets/images'
import Banner from '../components/banner'
import Chat from '../components/chat'
import Contactform from '../components/contactform'
import Footer from '../components/footer'

const Home = () => {
    const data = [
        {
            id:1,
            name: 'Jennifer Anderson',
            img: person1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid nulla modi maxime corrupti ipsum, fugiat esse iusto quisquam perspiciatis hic tempora molestias porro."
        },
        {
            id:2,
            name: 'Emily Davis',
            img: person2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid nulla modi maxime corrupti ipsum, fugiat esse iusto quisquam perspiciatis hic tempora molestias porro.'
        },
        {
            id:3,
            name: 'Robert Johnson',
            img: person3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid nulla modi maxime corrupti ipsum, fugiat esse iusto quisquam perspiciatis hic tempora molestias porro.'
        },
    ]

    
    return (
        <>
            <Navbar active={0}/>
            <Banner banner={bannerhome} hpart1={'Get Answers to your'} hpart2={'car issues in minutes'} textp1={'We offering well-trained mechanics and excellent customer'} textp2={'service, all at competitive prices of vehicle repairs at your home'} textp3={'or place of work.'} />
            <Chat />
            <div className='bg-[#011E33] my-20 flex flex-col items-center pb-20 pt-8'>
                <h2 className='text-white text-5xl font-bold py-12'>Free Advice In Minutes</h2>
                <iframe width="597" height="731" src="https://www.youtube.com/embed/-5MFfr4D-2s?list=TLGGIm8jdYghNnwyNDA0MjAyNA" title="CarClinic Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='bg-white pb-20 flex flex-col items-center w-full'>
                <h2 className='text-center text-4xl font-bold text-[#011E33]'>We have helped 3000+ Customers <br></br> What They Are Saying</h2>
                <div className='m-auto'>
                    <div className='mt-8 flex px-8 gap-12'>
                        {data.map((d) => (
                            <div className='border-2 border-[#011E33] rounded-md' key={d.id}>
                                <div className='flex flex-col px-6 py-8 gap-12'>
                                    <img src={icon} alt="icon" width={40}/>
                                    <p>{d.review}</p>
                                </div>
                                <div className='flex items-center gap-4 bg-[#011E33] px-6 py-4'>
                                    <img src={d.img} alt="customer" />
                                    <p className='text-white'>{d.name}</p>
                                </div> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Contactform/>
            <Footer/>
        </>
    )
}

export default Home