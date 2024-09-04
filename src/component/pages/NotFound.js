import React from 'react'
import Nav from '../navigation-bar/Nav'

export default function NotFound() {
    return (
        <>
            <Nav pagePath="" />
            <div className='container flex flex-col items-center relative -z-20'>
                {/* background */}
                <div>
                    <img src="./images/gifs/electrocuted-caveman-animation-404-error-page.gif" alt="404.gif" className='select-none -translate-y-1 drop-shadow-lg shadow-black' draggable="false" />
                </div>

                {/* content */}
                <div className='mx-auto text-center flex flex-col items-center gap-8'>
                    <h2 className='font-ConcertOneRegular select-none text-[180px] capitalize font-semibold w-max text-gray-800 '>oopse</h2>
                    <h1 className='text-2xl relative font-bold opacity-70 font-MacondoRegular capitalize'>404 - page not found</h1>
                </div>
            </div>
        </>
    )
}
