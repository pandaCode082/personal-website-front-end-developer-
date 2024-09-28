import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';

export default function PostPage() {

    const [content, setContent] = useState(null),
        navigate = useNavigate();
    let { postID } = useParams();
    useEffect(() => {
        fetch(`https://freetestapi.com/api/v1/books/${postID}`, { method: "GET" })
            .then(resp => resp.json().then(data => {
                console.log(data);
                setContent(data);
            }))
            .catch(err => {
                console.log(err);
                navigate("/");
            })
    }, [postID])



    return (
        <>
            {content ? (
                <div className="container mt-36 flex gap-8">

                    <div className='w-96 h-96 bg-sky-500/50 rounded-3xl shadow-xl shadow-black/15 drop-shadow-sm text-white grid place-content-center overflow-hidden'>
                        {(content.cover_image) ? <img src={content.cover_image} alt='product' /> : <h2 className='font-bold text-4xl drop-shadow-lg text-center object-cover'>{content.title}</h2>}
                    </div>

                    <div className='h-full flex flex-col justify-start gap-5 text-gray-500'>

                        <h1 className="font-bold text-6xl drop-shadow-lg text-gray-950 mb-7">{content.title}</h1>
                        <p className='text-lg'>{content.description}</p>

                        <p>
                            <span className='font-bold'>author : </span>
                            {content.author}
                        </p>

                        <p>
                            <span className='font-bold'>genre : </span>
                            {content.genre.join(" / ")}
                        </p>

                        <p>
                            <span className='font-bold'>year : </span>
                            {content.publication_year}
                        </p>

                        <Link className='capitalize nav-btn bg-sky-700 text-white w-max hover:bg-sky-600'>add to cart</Link>
                    </div>
                </div>

            ) :
                <Loading />}
        </>
    )
}