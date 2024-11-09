import React from 'react';
import Footer from "./../footer/Footer"
export default function Blogs() {
    return (
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

            <div className='container flex gap-6 mt-10'>
                <div>
                    <div className='container h-max mt-8 mb-14 flex justify-center gap-x-5'>
                        <button className='blogs-category active'>all</button>
                        <button className='blogs-category'>category 1</button>
                        <button className='blogs-category'>category 2</button>
                        <button className='blogs-category'>category 3</button>
                        <button className='blogs-category'>category 4</button>
                        <button className='blogs-category'>category 5</button>
                    </div>

                    <div className='flex justify-center gap-9 flex-wrap h-max w-full'>


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
                < div className='flex flex-col gap-10 w-[800px] h-max bg-slate-100 rounded-lg mt-32 shadow-lg shadow-black/20 p-7 sticky top-10'>
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
    )
}
