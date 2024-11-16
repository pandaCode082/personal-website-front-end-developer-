import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loading from './../loading/Loading';
import Footer from './../footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Blog() {
    const [target, setTarget] = useState(null),
        [showRightBar, setShowRightBar] = useState(false),
        location = useLocation(),
        blogID = location.pathname.split("/")[location.pathname.split("/").length - 1];

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/pandaCode082/2ebe1041fbacbd12939ed2e457a563ce/raw")
            .then(resp => resp.json())
            .then((data) => {
                const thisBlog = data["en"].categories.find(blog => blog.id === Number(blogID));
                setTarget(thisBlog);
            })
            .catch(err => console.log(err));
    }, [blogID]);

    return (
        target ?
            (
                <>
                    <div className='container mt-10'>
                        <nav className='w-full h-max bg-sky-600/30 backdrop-blur-sm rounded-xl md:py-5 py-3 md:px-10 px-5 shadow-lg'>
                            <h4 className='capitalize [&>a]:opacity-50 [&>a:hover]:opacity-100 [&>a]:transition-opacity'>
                                <Link to={'/Blogs'}>blog</Link>
                                &nbsp;
                                {"/"}
                                &nbsp;
                                <Link to={location.pathname}>{target.name}</Link>
                            </h4>
                        </nav>
                        {/* -------------------- info ---------------------- */}
                        <div className='lg:w-9/12 w-full mx-auto bg-no-repeat bg-cover mt-10'>
                            <div className='w-full h-max flex justify-between items-center [&>span]:opacity-40 mb-10 px-4 md:px-0 [&>span]:text-xs sm:[&>span]:text-base
                            '>
                                <span>{target.author}</span>
                                <h1 className='lg:text-6xl text-4xl capitalize font-ConcertOneRegular'>{target.name}</h1>
                                <span>{target.publish_date}</span>
                            </div>

                            {/* -------------------- image ---------------------- */}
                            <div className='md:w-10/12 w-full shadow-lg aspect-[1/0.55] mx-auto overflow-hidden rounded-2xl bg-slate-500'>
                                <img src={target.img} alt={target.name} className='object-cover w-full aspect-[1/0.55]' />
                            </div>

                        </div>
                        <svg viewBox="0 0 512 512" className='size-8 text-sky-500 animate-bounce mx-auto my-10 drop-shadow-lg opacity-40'>
                            <path fill="currentColor" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z" /></svg>
                    </div>

                    <section className='container flex gap-7'>
                        {/* -------side bar --------- */}
                        <div className={`lg:min-w-96 lg:w-4/12 sm:w-96 w-72 min-w-0 max-w-96 aspect-auto h-max xl:bg-sky-950/20 bg-slate-400 backdrop-blur-sm p-5 rounded-lg shadow-lg xl:top-10 xl:sticky fixed top-1/2 xl:translate-y-0 -translate-y-1/2 xl:left-0 xl:right-0 transition-all duration-500 ease-in z-[999] ${showRightBar ? "right-0" : "sm:-right-9/12 sm:-right-96 -right-72"}`}>

                            <div onClick={() => { setShowRightBar((prev) => !prev) }}

                                className='xl:hidden grid place-content-center text-white absolute top-1/2 left-[1px] -translate-x-10 w-10 h-16 -translate-y-1/2 bg-slate-400 backdrop-blur rounded-l-lg after:radius-effect-after before:radius-effect-beore cursor-pointer' >
                                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-75 -top-2 -left-1.5"></span>
                                <span class="absolute inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-75 -top-2 -left-1.5"></span>
                                <svg viewBox="0 0 20 20" fill="currentColor" class="size-8">
                                    <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                                </svg>

                            </div>

                            {/* ------- > author information */}
                            <div className='border-b border-slate-800/50 text-center pb-4 mb-4 relative'>
                                <span className='top-0 left-0 absolute capitalize text-sm opacity-30'>author :</span>
                                <div className='md:w-40 w-32 aspect-[1/1] rounded-full overflow-hidden bg-black/20 mx-auto my-4'>
                                    <img src="https://avatars.githubusercontent.com/u/170001683?v=4" alt="porofile" className='object-cover w-full' />
                                </div>
                                <h3 className='capitalize font-bold text-lg'>{target.author}</h3>
                                <div className='text-sm flex gap-2 justify-center my-4'>
                                    <a className='btn bg-black text-white' href='/'>github</a>
                                    <a className='btn bg-sky-700 text-white' href='/'>resume</a>
                                </div>
                                <div className='flex w-7/12'></div>
                            </div>
                            {/* --------> Related content */}
                            <div>
                                <h3 className='capitalize font-bold text-lg border-b pb-4 mb-4'>
                                    Related content
                                </h3>
                                {/* ------- > content */}
                                <div className='divide-y divide-slate-600/30'>

                                    <Link to="/Blogs/blog/4" className='flex gap-4 items-center py-2'>
                                        <div className='w-16 aspect-[1/1] bg-black/30 rounded-full overflow-hidden'>
                                            <img src={target.img} alt="blog" className='object-cover aspect-[2/1] h-full' />
                                        </div>
                                        <div className='w-full'>
                                            <div className='flex justify-between'>
                                                <h3 className="text-lg capitalize font-bold leading-none">javascript</h3>
                                                <span className='text-[10px] opacity-35 capitalize'>mahdi roohandeh</span>
                                            </div>
                                            <span className='text-[12px] opacity-60 leading-[10px] mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, error.</span>
                                        </div>
                                    </Link>
                                    <Link to="/Blogs/blog/2" className='flex gap-4 items-center py-2'>
                                        <div className='w-16 aspect-[1/1] bg-black/30 rounded-full overflow-hidden'>
                                            <img src={target.img} alt="blog" className='object-cover aspect-[2/1] h-full' />
                                        </div>
                                        <div className='w-full'>
                                            <div className='flex justify-between'>
                                                <h3 className="text-lg capitalize font-bold leading-none">javascript</h3>
                                                <span className='text-[10px] opacity-35 capitalize'>mahdi roohandeh</span>
                                            </div>
                                            <span className='text-[12px] opacity-60 leading-[10px] mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, error.</span>
                                        </div>
                                    </Link>

                                    <Link to="/Blogs/blog/3" className='flex gap-4 items-center py-2'>
                                        <div className='w-16 aspect-[1/1] bg-black/30 rounded-full overflow-hidden'>
                                            <img src={target.img} alt="blog" className='object-cover aspect-[2/1] h-full' />
                                        </div>
                                        <div className='w-full'>
                                            <div className='flex justify-between'>
                                                <h3 className="text-lg capitalize font-bold leading-none">javascript</h3>
                                                <span className='text-[10px] opacity-35 capitalize'>mahdi roohandeh</span>
                                            </div>
                                            <span className='text-[12px] opacity-60 leading-[10px] mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, error.</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <main className='space-y-10 xl:w-10/12 w-full xl:text-left text-center'>
                            <article className='space-y-10 font-base'>
                                <h3 className='font-medium text-3xl capitalize'>title</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque alias ab cumque. Dignissimos optio veritatis impedit totam minima veniam similique!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aperiam ipsum impedit consequuntur expedita similique quasi laudantium praesentium inventore nisi, voluptatibus modi quo magnam asperiores, reiciendis, provident error porro aut aliquam perferendis. Consectetur commodi perspiciatis laudantium architecto dicta reiciendis aspernatur libero inventore ex? Minus aperiam, iusto tenetur, dolor porro magni harum quaerat, beatae ipsum ut qui placeat consequuntur est sint velit unde cupiditate quis. Molestiae illo quis iste quae quibusdam.
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum pariatur vel commodi impedit earum maiores repellendus velit temporibus quo aspernatur doloribus, veniam sapiente, ex consequuntur, magni laudantium possimus veritatis? Consequuntur obcaecati architecto, quo officia maxime tempora quos asperiores, animi, ipsam laboriosam nesciunt natus! Sapiente natus hic sed labore architecto quas laboriosam temporibus adipisci nulla dolorum asperiores neque aperiam ut, deleniti animi consequatur est cupiditate suscipit veniam quaerat repudiandae aspernatur molestiae? Error ratione dolorum officia quaerat laborum distinctio nam illum at iste impedit totam blanditiis hic, a alias ut quae natus quia. Sequi velit harum repellendus magni! Possimus soluta, sunt minus iure deleniti dignissimos quos officia! Odio nisi totam dolorem adipisci ipsum numquam commodi, quo, asperiores dolorum error consequatur tempore facere veniam repudiandae natus molestias fugiat harum quis in sed hic quia. Aliquid illum corporis dolorem exercitationem dolore iste ea suscipit repudiandae nemo?
                                </p>
                            </article>
                            <article className='space-y-10 font-base'>

                                <h3 className='font-medium text-3xl capitalize'>title 2</h3>

                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum pariatur vel commodi impedit earum maiores repellendus velit temporibus quo aspernatur doloribus, veniam sapiente, ex consequuntur, magni laudantium possimus veritatis? Consequuntur obcaecati architecto, quo officia maxime tempora quos asperiores, animi, ipsam laboriosam nesciunt natus! Sapiente natus hic sed labore architecto quas laboriosam temporibus adipisci nulla dolorum asperiores neque aperiam ut, deleniti animi consequatur est cupiditate suscipit veniam quaerat repudiandae aspernatur molestiae? Error ratione dolorum officia quaerat laborum distinctio nam illum at iste impedit totam blanditiis hic, a alias ut quae natus quia. Sequi velit harum repellendus magni! Possimus soluta, sunt minus iure deleniti dignissimos quos officia! Odio nisi totam dolorem adipisci ipsum numquam commodi, quo, asperiores dolorum error consequatur tempore facere veniam repudiandae natus molestias fugiat harum quis in sed hic quia. Aliquid illum corporis dolorem exercitationem dolore iste ea suscipit repudiandae nemo?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque alias ab cumque. Dignissimos optio veritatis impedit totam minima veniam similique!
                                </p>
                            </article>
                            <article className='space-y-10 font-base'>

                                <h3 className='font-medium text-3xl capitalize'>title 3</h3>

                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum pariatur vel commodi impedit earum maiores repellendus velit temporibus quo aspernatur doloribus, veniam sapiente, ex consequuntur, magni laudantium possimus veritatis? Consequuntur obcaecati architecto, quo officia maxime tempora quos asperiores, animi, ipsam laboriosam nesciunt natus! Sapiente natus hic sed labore architecto quas laboriosam temporibus adipisci nulla dolorum asperiores neque aperiam ut, deleniti animi consequatur est cupiditate suscipit veniam quaerat repudiandae aspernatur molestiae? Error ratione dolorum officia quaerat laborum distinctio nam illum at iste impedit totam blanditiis hic, a alias ut quae natus quia. Sequi velit harum repellendus magni! Possimus soluta, sunt minus iure deleniti dignissimos quos officia! Odio nisi totam dolorem adipisci ipsum numquam commodi, quo, asperiores dolorum error consequatur tempore facere veniam repudiandae natus molestias fugiat harum quis in sed hic quia. Aliquid illum corporis dolorem exercitationem dolore iste ea suscipit repudiandae nemo?
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum pariatur vel commodi impedit earum maiores repellendus velit temporibus quo aspernatur doloribus, veniam sapiente, ex consequuntur, magni laudantium possimus veritatis? Consequuntur obcaecati architecto, quo officia maxime tempora quos asperiores, animi, ipsam laboriosam nesciunt natus! Sapiente natus hic sed labore architecto quas laboriosam temporibus adipisci nulla dolorum asperiores neque aperiam ut, deleniti animi consequatur est cupiditate suscipit veniam quaerat repudiandae aspernatur molestiae? Error ratione dolorum officia quaerat laborum distinctio nam illum at iste impedit totam blanditiis hic, a alias ut quae natus quia. Sequi velit harum repellendus magni! Possimus soluta, sunt minus iure deleniti dignissimos quos officia! Odio nisi totam dolorem adipisci ipsum numquam commodi, quo, asperiores dolorum error consequatur tempore facere veniam repudiandae natus molestias fugiat harum quis in sed hic quia. Aliquid illum corporis dolorem exercitationem dolore iste ea suscipit repudiandae nemo?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque alias ab cumque. Dignissimos optio veritatis impedit totam minima veniam similique!
                                </p>
                            </article>
                        </main>
                    </section >

                    <section className='container min-h-16 h-max mt-40 relative z-50 flex flex-col gap-10 xl:items-start items-center'>
                        <h2 className='font-bold text-4xl drop-shadow-md'>Recently visited :</h2>
                        <div className='xl:w-6/12 lg:w-9/12 w-full aspect-[1/0.55] xl:absolute top-0 right-0 bg-black/20 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-full">

                                <SwiperSlide className='relative'>
                                    <div className='w-full h-full grid place-content-center'>
                                        <img src={target.img} alt="slide" className='object-cover' />

                                        <Link to="/" className='flex flex-col absolute left-0 right-0 mx-auto bottom-0 w-9/12 h-max  bg-sky-200/25 backdrop-blur-sm rounded-t-xl p-5 text-white'>
                                            <div className='p-3 bg-black/50 backdrop-blur-sm rounded-2xl h-max overflow-hidden'>
                                                <h4 className='capitalize text-2xl font-bold text-center drop-shadow-md'>{target.name}</h4>
                                                <div className='text-xs opacity-70 flex justify-between'>
                                                    <span>{target.author}</span>
                                                    <span>{target.publish_date}</span>
                                                </div>
                                            </div>
                                            <p className='mt-2 opacity-55 text-center line-clamp-3'>{target.description}</p>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='relative'>
                                    <div className='w-full h-full grid place-content-center'>
                                        <img src={target.img} alt="slide" className='object-cover' />

                                        <Link to="/" className='flex flex-col absolute left-0 right-0 mx-auto bottom-0 w-9/12 h-max bg-sky-200/25 backdrop-blur-sm rounded-t-xl p-5 text-white'>
                                            <div className='p-3 bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden'>
                                                <h4 className='capitalize text-2xl font-bold text-center drop-shadow-md'>{target.name}</h4>
                                                <div className='text-xs opacity-70 flex justify-between'>
                                                    <span>{target.author}</span>
                                                    <span>{target.publish_date}</span>
                                                </div>
                                            </div>
                                            <p className='mt-2 opacity-55 text-center line-clamp-3'>{target.description}</p>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='relative'>
                                    <div className='w-full h-full grid place-content-center'>
                                        <img src={target.img} alt="slide" className='object-cover' />

                                        <Link to="/" className='flex flex-col absolute left-0 right-0 mx-auto bottom-0 w-9/12 h-max bg-sky-200/25 backdrop-blur-sm rounded-t-xl p-5 text-white'>
                                            <div className='p-3 bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden'>
                                                <h4 className='capitalize text-2xl font-bold text-center drop-shadow-md'>{target.name}</h4>
                                                <div className='text-xs opacity-70 flex justify-between'>
                                                    <span>{target.author}</span>
                                                    <span>{target.publish_date}</span>
                                                </div>
                                            </div>
                                            <p className='mt-2 opacity-55 text-center line-clamp-3'>{target.description}</p>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='relative'>
                                    <div className='w-full h-full grid place-content-center'>
                                        <img src={target.img} alt="slide" className='object-cover' />

                                        <Link to="/" className='flex flex-col absolute left-0 right-0 mx-auto bottom-0 w-9/12 h-max  bg-sky-200/25 backdrop-blur-sm rounded-t-xl p-5 text-white'>
                                            <div className='p-3 bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden'>
                                                <h4 className='capitalize text-2xl font-bold text-center drop-shadow-md'>{target.name}</h4>
                                                <div className='text-xs opacity-70 flex justify-between'>
                                                    <span>{target.author}</span>
                                                    <span>{target.publish_date}</span>
                                                </div>
                                            </div>
                                            <p className='mt-2 opacity-55 text-center line-clamp-3'>{target.description}</p>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </section>
                    <Footer />
                </>
            )
            : (
                <Loading />
            )
    )
}
