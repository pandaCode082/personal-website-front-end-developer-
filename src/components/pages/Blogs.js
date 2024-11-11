import React, { useState } from 'react';
import Footer from "./../footer/Footer"
export default function Blogs() {
    const [ShowRightBar, setShowRightBar] = useState(false)

    return (
        <>
            <div className='w-full absolute top-0 left-0'>
                <div className='w-full h-[90vh] bg-[url(./../../public/images/3dd65fc2-ad5c-4a48-827e-12b46ea01cef.jpg)] bg-cover bg-top flex items-center'>
                    <div className='container w-full h-max flex lg:justify-start justify-center '>

                        <div className='lg:w-1/2 w-full h-96 bg-black/50 shadow-lg backdrop-blur-md lg:text-left text-center text-white p-9 rounded-xl'>
                            <img src="https://s8.uupload.ir/files/pandalogo_4yq6.png" alt="panda-logo" className='inline-block' />
                            <br />
                            <br />
                            <h1 className='font-ConcertOneRegular text-5xl capitalize'>mahdi roohandeh</h1>
                            <br />
                            <p className='text-slate-400/80 line-clamp-4 w-3/4 text-sm lg:mx-0 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nihil doloribus error quis voluptatibus cum, dolorem neque aliquam eligendi. Sed illum eos qui minima commodi est libero saepe dolores officia.</p>
                        </div>
                    </div>
                </div>

                {/* -------------------- categorys section -------------------- */}

                <div className='container xl:flex gap-6 mt-10 mb-20'>
                    <div>
                        <div className='container h-max mt-8 mb-14 flex justify-center lg:gap-x-5 gap-x-3 gap-y-3 flex-wrap'>
                            <button className='blogs-category active'>all</button>
                            <button className='blogs-category'>category 1</button>
                            <button className='blogs-category'>category 2</button>
                            <button className='blogs-category'>category 3</button>
                            <button className='blogs-category'>category 4</button>
                            <button className='blogs-category'>category 5</button>
                        </div>

                        <div className='flex justify-center gap-9 flex-wrap h-max container'>


                            <a href='/blogs' className='category'>
                                <div>
                                    <img src="./images/jungle.png" alt="category img" />
                                </div>
                                <div>
                                    <span>mahdi roohandeh</span>
                                    <h3>The way to learn programming</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam optio deserunt non ipsum repellat, dolor ullam molestias et soluta!</p>
                            </a>

                            <a href='/blogs' className='category'>
                                <div>
                                    <img src="./images/gifs/blogs-header.gif" alt="category img" />
                                </div>
                                <div>
                                    <span>mahdi roohandeh</span>
                                    <h3>How to become a programmer</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam optio deserunt non ipsum repellat, dolor ullam molestias et soluta!</p>
                            </a>

                            <a href='/blogs' className='category'>
                                <div>
                                    <img src="./images/image.png" alt="category img" />
                                </div>
                                <div>
                                    <span>mahdi roohandeh</span>
                                    <h3>Who is the front end specialist?</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam optio deserunt non ipsum repellat, dolor ullam molestias et soluta!</p>
                            </a>

                            <a href='/blogs' className='category'>
                                <div>
                                    <img src="./images/thiet-ke-website.jpg" alt="category img" />
                                </div>
                                <div>
                                    <span>mahdi roohandeh</span>
                                    <h3>How to have a website for your personal business?</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam optio deserunt non ipsum repellat, dolor ullam molestias et soluta!</p>
                            </a>
                            <a href='/blogs' className='category'>
                                <div>
                                    <img src="./images/28.jpg" alt="category img" />
                                </div>
                                <div>
                                    <span>mahdi roohandeh</span>
                                    <h3>How having a website helps your business</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam optio deserunt non ipsum repellat, dolor ullam molestias et soluta!</p>
                            </a>


                        </div >
                    </div >

                    {/* right side */}
                    < div className={`flex flex-col gap-10 xl:w-[650px] sm:w-80 w-72 h-max xl:bg-slate-300/20 bg-slate-300 backdrop-blur xl:rounded-lg rounded-l-lg mt-32 shadow-lg shadow-black/20 p-7 xl:sticky fixed top-10 xl:left-0 xl:right-0 transition-all duration-500 ease-in z-50 ${ShowRightBar ? "right-0" : "sm:-right-80 -right-72"}`}>

                        <div onClick={() => { setShowRightBar((prev) => !prev) }}
                        
                            className='xl:hidden grid place-content-center text-white absolute top-1/2 left-[1px] -translate-x-10 w-10 h-16 -translate-y-1/2 bg-slate-300 backdrop-blur rounded-l-lg after:radius-effect-after before:radius-effect-beore cursor-pointer' >
                            <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-75 -top-2 -left-1.5"></span>
                            <span class="absolute inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-75 -top-2 -left-1.5"></span>
                            <svg viewBox="0 0 20 20" fill="currentColor" class="size-8">
                                <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                            </svg>

                        </div>

                        <h3 className='text-xl capitalize pb-3 border-b font-medium text-slate-600'>Latest blogs</h3>

                        <a href='/blogs' className='laste-category'>
                            <div>
                                <img src="./images/28.jpg" alt="category img" />
                            </div>
                            <div>
                                <span>mahdi roohandeh</span>
                                <h3>How having a website helps your business</h3>
                            </div>
                        </a>

                        <a href='/blogs' className='laste-category'>
                            <div>
                                <img src="./images/gifs/blogs-header.gif" alt="category img" />
                            </div>
                            <div>
                                <span>mahdi roohandeh</span>
                                <h3>How to become a programmer</h3>
                            </div>
                        </a>

                        <a href='/blogs' className='laste-category'>
                            <div>
                                <img src="./images/image.png" alt="category img" />
                            </div>
                            <div>
                                <span>mahdi roohandeh</span>
                                <h3>Who is the front end specialist?</h3>
                            </div>
                        </a>

                    </div >
                </div >
                <Footer />
            </div >
        </>
    )
}
