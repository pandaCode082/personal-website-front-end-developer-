import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <div className='container flex flex-col items-center relative'>
                {/* background */}
                <div className='w-2/3 xl:w-[350px] 2xl:w-max'>
                    <img src="./images/gifs/electrocuted-caveman-animation-404-error-page.gif" alt="404.gif" className='select-none -translate-y-1 drop-shadow-lg shadow-black' draggable="false" />
                </div>

                {/* content */}
                <div className='mx-auto lg:mt-0 mt-10 text-center flex flex-col items-center lg:gap-8 gap-4'>
                    <h2 className='font-ConcertOneRegular select-none 2xl:text-[180px]  xl:text-[120px] sm:text-9xl text-7xl capitalize font-semibold w-max text-gray-800 '>oopse</h2>
                    <h1 className='sm:text-2xl text-base relative font-bold opacity-70 font-MacondoRegular capitalize'>404 - page not found</h1>
                    <button className='capitalize 2xl:mt-8 xl:mt-0 mt-8 nav-btn bg-sky-600 text-white drop-shadow-sm hover:bg-sky-700 relative z-50 block' onClick={() => {
                        navigate("/");
                    }}>
                        home
                    </button>
                </div>
            </div>
        </>
    )
}
