import React from 'react'

export default function Loading() {
    return (
        <div className='h-[70svh] w-min grid place-content-center container cursor-wait'>

            <img src="/images/gifs/panda-gif.gif" alt='loading' className='w-full rounded-full' />

            <h1 className='text-3xl text-center mt-5 capitalize text-gray-600 opacity-75 drop-shadow-lg font-semibold'>loading...</h1>

        </div>
    )
}
