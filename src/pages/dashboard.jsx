import React, { useEffect, useState } from 'react'
import { car, partner1, partner2, partner3, partner4, partner5, partner6 } from '../assets/images'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import RepairPopup from '../components/repairpopup'
import axios from 'axios'
import Chat from '../components/chat'

const Dashboard = () => {
    const [repairs, setRepairs] = useState([])
    const [popup, setPopup] = useState(0)

    useEffect(() => {
        const Fetch = async () => {
            const { data } = await axios.get('/api/api/v1/repair/getrepair');
            setRepairs(data?.repairHistory);
        }
        Fetch()
    }, [])


    return (
        <>
            <Navbar />
            {popup && <RepairPopup setPopup={setPopup} />}
            <div className='bg-white flex justify-center items-center py-24'>
                <img src={car} alt="car" />
            </div>
            <Chat/>
            <div className='px-16 py-6'>
                <div className='flex justify-between'>
                    <h2 className='text-[#011E33] text-3xl font-bold pb-4 text-start'>Repair History</h2>
                    <button onClick={() => setPopup(1)} className='text-white bg-[#011E33] px-[20px] py-[4px] text-md font-bold rounded-md'>Add New</button>
                </div>
                <div className='pt-4 grid grid-cols-3 gap-4'>
                    <div className='flex justify-between'>
                        {repairs?.length > 0 && repairs?.map((elem) => {
                            return <div className='flex flex-col justify-center items-center shadow-xl p-4' key={elem._id}>
                                <img src={`/api/api/v1/repair/get-product-photo/${elem._id}`} width={120} alt="Repair Image" />
                                <p className='pt-4 text-xl'>{elem.description}</p>
                            </div>
                        })
                        }
                        {repairs?.length < 0 && <div className='py-12 w-full'>
                            <p className='text-center text-xl'>No repair history</p>
                        </div>}
                    </div>
                </div>
            </div>
            <div className='flex flex-col py-8'>
                <h2 className='text-[#011E33] text-3xl font-bold pb-4 text-center'>Car Clinics Near You</h2>
                {/* <p>'AIzaSyD1ElwWztZvNQKmaVP42sD66lG1miGbH8c'</p> */}
            </div>
            <div className='flex flex-col py-8'>
                <h2 className='text-[#011E33] text-3xl font-bold pb-4 text-center'>Shop For Parts</h2>
                <div className='flex flex-col justify-center items-center gap-4 max-sm:px-6'>
                    <div className='flex gap-6 max-sm:flex-col'>
                        <img className='max-sm:w-80' src={partner1} alt="partner" />
                        <img className='max-sm:w-80' src={partner2} alt="partner" />
                        <img className='max-sm:w-80' src={partner3} alt="partner" />
                    </div>
                    <div className='flex gap-10 max-sm:flex-col'>
                        <img className='max-sm:w-80' src={partner4} alt="partner" />
                        <img className='max-sm:w-80' src={partner5} alt="partner" />
                        <img className='max-sm:w-80' src={partner6} alt="partner" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Dashboard