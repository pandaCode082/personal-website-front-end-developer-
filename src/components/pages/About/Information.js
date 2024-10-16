import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { posts } from '../../../postData';
import { Link } from 'react-router-dom';
export default function Information() {
    return (
        <div className='container flex flex-col'>
            <div className='flex justify-center items-center gap-20'>
                <div className='flex flex-col gap-3 w-1/3'>
                    <h1 className='text-5xl drop-shadow-md capitalize font-extrabold'>mahdi roohandeh</h1>
                    <p className='font-ConcertOneRegular text-gray-800 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae inventore assumenda possimus nam, modi illum, aut ad soluta corporis ipsum, deleniti necessitatibus aspernatur debitis recusandae repellendus! Aliquid, nulla repudiandae libero pariatur veniam, facilis ducimus dolores omnis suscipit facere temporibus accusamus a itaque, dignissimos maiores corporis praesentium maxime assumenda sed distinctio at nesciunt doloremque dolor neque. Facilis cupiditate est ex!</p>
                </div>
                <div className='max-w-[500px]'>
                    <img src="/images/HeaderPanda.png" alt="me" className='drop-shadow-xl shadow-black' />
                </div>
            </div>
            <div className='w-full h-72 bg-sky-900/30 backdrop-blur-lg rounded-2xl p-3'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-full"
                >
                    {
                        posts.map(post => {
                            return (
                                <SwiperSlide key={post.id} className='bg-white rounded-xl'>
                                    <Link to={`/shop/post/${post.id}`} className='w-full h-full  grid place-content-center' >
                                        <div>
                                            <h4>{post.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div >
    )
}
