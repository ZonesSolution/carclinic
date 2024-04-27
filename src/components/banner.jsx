import React from 'react';

const Banner = ({ banner, hpart1, hpart2, textp1, textp2, textp3, picture}) => {
  return (
    <>
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center px-28 max-sm:px-4">
        <h1 className="text-white text-5xl font-bold uppercase max-sm:text-xl">{hpart1} <br></br> {hpart2}</h1>
        <p className='text-white pt-2 max-sm:text-sm'>{textp1} <br className='max-sm:hidden'></br> {textp2} <br className='max-sm:hidden'></br>{textp3}</p>
        <div className='flex pt-6 gap-6'>
            <button className='text-white bg-[#011E33] px-[30px] py-[10px] text-xl font-bold rounded-md'>CHAT NOW</button>
        </div>
      </div>
    </div>
    <div className='bg-[#011E33] py-6 flex justify-center max-sm:px-6'>
      <img src={picture} alt="certificate" />
    </div>
    </>
  );
};

export default Banner;
