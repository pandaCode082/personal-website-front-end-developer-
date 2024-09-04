import React from 'react'
import { Link } from 'react-router-dom'

export default function Post(props) {

    return (
        <div className='w-60 h-max p-2 block rounded-lg border bg-sky-500 text-white space-y-3'>
            <div className='w-full aspect-[1/0.9] grid place-content-center bg-slate-400 rounded-xl text-center'>
                <span>{props.title}</span>
            </div>

            <div className='pl-2 space-y-2'>
                <h3 className='text-lg font-bold capitalize'>{props.author}</h3>
                <div className='flex justify-between'>
                    <p className='opacity-40 text-sm'>{props.date}</p>
                    <div className='flex gap-2'>
                        <Link to={`/shop/post/${props.id}`} className='post_btn'>see</Link>
                        <button className='post_btn'>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
