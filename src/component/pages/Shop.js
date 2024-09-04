import React from 'react';
import Nav from '../navigation-bar/Nav';
import Post from '../post/Post';
import { posts } from '../../postData';
export default function Shop(props) {

    return (
        <>
            <Nav pagePath={"/shop"} />

            <div className='container mt-4 flex flex-wrap gap-5 justify-center'>
                <h1 className='mt-20 font-bold opacity-60 text-4xl w-full flex-grow'># web</h1>

                {
                    posts.length === 0 ? <h3>loading . . .</h3> :
                        posts.map(posts => <Post key={posts.id} {...posts} />)
                }

            </div >
        </>
    )
}
