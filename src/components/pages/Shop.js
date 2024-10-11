import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Loading from '../loading/Loading';
import { useNavigate } from 'react-router-dom';
export default function Shop(props) {
    const navigate = useNavigate()
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://freetestapi.com/api/v1/books`, { method: "GET" })
            .then(resp => resp.json().then(data => {

                setPost(data.slice(0, 10));
            }))
            .catch(err => {
                navigate("/404");
                console.log(err);
            })
    }
        , [])

    return (
        <>
            <div className='container mt-4 flex flex-wrap gap-5 justify-center'>
                {
                    posts.length === 0 ? <Loading /> :
                        posts.map(posts => <Post key={posts.id} {...posts} />)
                }

            </div >
        </>
    )
}
