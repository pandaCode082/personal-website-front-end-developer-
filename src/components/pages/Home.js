import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="2xl:mt-0 mt-0 xl:mt-10 flex flex-col-reverse xl:flex-row xl:text-left text-center xl:justify-between justify-center items-center container xl:h-[70vh] h-max xl:pt-0 pt-16 xl:gap-0 gap-10">
                {/* ------------------------------------ content ------------------------------------ */}
                <div className=' xl:max-w-[calc(50%-160px)] max-w-none w-full h-max items-center xl:ml-40 self-center lg:space-y-10 space-y-3 flex flex-col justify-center '>
                    <h1 className='font-bold lg:text-[80px] sm:text-5xl text-4xl capitalize xl:text-left text-center block w-full '>panda_code</h1>
                    <p className='xl:w-full w-8/12 text-wrap text-center xl:text-left text-gray-700 md:text-sm text-xs font-ConcertOneRegular space-x-1'>
                        <span className='lg:line-clamp-none line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias perferendis animi minima quibusdam sunt, est inventore suscipit? Sed asperiores nisi veniam itaque aperiam obcaecati, fugiat adipisci. Deserunt vero doloremque dolorum nulla qui, nisi libero culpa impedit, laboriosam voluptates excepturi perferendis aspernatur reiciendis, iure distinctio praesentium voluptatum ab facere aut.
                            <Link className='text-blue-500 underline lg:inline hidden' to={"/about"}>more</Link>
                        </span>
                        <Link className='text-blue-500 underline lg:hidden inline' to={"/about"}>more</Link>
                    </p>
                    <div className='w-full h-max flex xl:justify-start justify-center'>
                        <Link to="/shop" className='mt-2 nav-btn bg-sky-700 hover:bg-sky-600 text-white capitalize text-lg'>get started</Link>
                    </div>
                </div>

                {/* --------------------------------- img --------------------------------- */}
                <div className='relative 2xl:w-[520px] xl:w-[400px] lg:w-96 md:w-64 w-52 aspect-[1/1] rounded-full lg:shadow-2xl shadow-md bg-sky-400/30 xl:self-center grid backdrop-blur-md place-content-center'>
                    <div className='w-full h-max absolute rounded-b-full overflow-x-hidden self-end flex justify-center'>
                        <img className='w-[calc(100%+60px)] max-w-max object-cover lg:custom_shadow drop-shadow-lg select-none' draggable={false} src="./images/headerPanda.png" alt="panda" />
                    </div>
                </div>

            </div>
        </>
    )
}
