import React from 'react';
import Nav from '../navigation-bar/Nav';
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <>
            <Nav pagePath={"/"} />

            <div className="flex flex-col-reverse xl:flex-row xl:text-left text-center xl:justify-between justify-center items-center container xl:h-[70vh] h-max xl:pt-0 pt-16">
                {/* ------------------------------------  content ------------------------------------ */}
                <div className='w-max max-w-[calc(50%-160px)] h-max xl:ml-40 self-center space-y-10 '>
                    <h1 className='font-bold text-[80px] capitalize'>panda_code__</h1>
                    <p className='text-gray-700 text-sm font-ConcertOneRegular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias perferendis animi minima quibusdam sunt, est inventore suscipit? Sed asperiores nisi veniam itaque aperiam obcaecati, fugiat adipisci. Deserunt vero doloremque dolorum nulla qui, nisi libero culpa impedit, laboriosam voluptates excepturi perferendis aspernatur reiciendis, iure distinctio praesentium voluptatum ab facere aut.</p>
                    <div className='w-full h-max flex xl:justify-start justify-center'>
                        <Link to="/shop" className='mt-2 nav-btn bg-sky-700 hover:bg-sky-600 text-white capitalize font-ConcertOneRegular text-lg'>get started</Link>
                    </div>
                </div>

                {/* --------------------------------- img --------------------------------- */}
                <div className='relative xl:w-[500px] w-96 xl:h-[500px] h-96 rounded-full shadow-2xl bg-sky-400/30 xl:self-center grid place-content-center'>
                    <div className='w-full h-max absolute rounded-b-full overflow-x-hidden self-end flex justify-center'>
                        <img className='w-[calc(100%+60px)] max-w-max object-cover custom_shadow select-none' draggable={false} src="./images/headerPanda.png" alt="panda" />
                    </div>
                </div>

            </div>
        </>
    )
}
