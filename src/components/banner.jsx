import React from 'react';
import { guarantee, hour } from '../assets/images';

const Banner = ({ banner, hpart1, hpart2, textp1, textp2, textp3}) => {
  return (
    <>
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center px-28">
        <h1 className="text-white text-5xl font-bold uppercase">{hpart1} <br></br> {hpart2}</h1>
        <p className='text-white pt-2'>{textp1} <br></br> {textp2} <br></br>{textp3}</p>
        <div className='flex pt-6 gap-6'>
            <button className='text-white bg-[#011E33] px-[30px] py-[10px] text-xl font-bold rounded-md'>CHAT NOW</button>
            <img src={hour} alt="24 hours availability" />
        </div>
      </div>
    </div>
    <div className='bg-[#011E33] py-6 flex justify-center'>
      <img src={guarantee} alt="certificate" />
    </div>
    </>
  );
};

export default Banner;
