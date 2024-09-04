import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { posts } from '../../postData';
import Nav from '../navigation-bar/Nav';
import { Link } from 'react-router-dom';

export default function PostPage() {

    const [content, setContent] = useState(null)
    let { postID } = useParams();

    setTimeout(() => {
        const post = posts.find((post) => {
            return post.id === Number(postID);
        });
        setContent(post);
    }, 3000);




    return (
        <>
            <Nav pagePath={"/shop"} />

            {posts.some((post) => {
                return post.id === Number(postID)
            }) ?
                (content ? (

                    <div className="container mt-36 flex gap-8">

                        <div className='w-96 h-96 bg-sky-500/50 rounded-3xl shadow-xl shadow-black/15 drop-shadow-sm text-white grid place-content-center p-3'>
                            {(content.imgSrc) ? <img src={content.imgSrc} alt='product' /> : <h2 className='font-bold text-4xl drop-shadow-lg text-center'>{content.title}</h2>}
                        </div>

                        <div className='h-full flex flex-col justify-start gap-5 text-gray-500'>

                            <h1 className="font-bold text-6xl drop-shadow-lg text-gray-950 mb-7">{content.title}</h1>
                            <p className='text-lg'>{content.content}</p>

                            <p>
                                <span className='font-bold'>author : </span>
                                {content.author}
                            </p>

                            <p>
                                <span className='font-bold'>tag : </span>
                                {content.tags.join(" / ")}
                            </p>

                            <p>
                                <span className='font-bold'>date : </span>
                                {content.date}
                            </p>

                            <Link className='capitalize nav-btn bg-sky-700 text-white w-max hover:bg-sky-600'>add to cart</Link>
                        </div>
                    </div>

                ) :
                    <div className='h-[70svh] w-min grid place-content-center container cursor-wait'>

                        {/* <div className='w-14 aspect-[1/1] rounded-full relative bg-gray-200 shadow-inner mx-auto p-2 overflow-hidden'>
                            <div className='bg-white w-full h-full rounded-full relative z-50'></div>
                            <div className='w-40 aspect-[1/1] bg-sky-700 absolute top-1/2 left-1/2 animate-spin origin-top-left'></div>
                        </div> */}
                        <img src="/images/gifs/panda-gif.gif" alt='loading' className='w-full rounded-full' />

                        <h1 className='text-3xl text-center mt-5 capitalize text-gray-600 opacity-75 drop-shadow-lg font-semibold'>loading...</h1>

                    </div>
                ) :
                <Navigate to="/shop" />}
        </>
    )
}