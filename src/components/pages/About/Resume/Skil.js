import React from 'react'

export default function Skil(props) {
    return (
        <div className='md:w-5/12 min-w-3/12 w-max max-w-[80%] h-max flex flex-col md:gap-2 gap-1 '>
            <div className='flex justify-between space-x-6 items-center px-1'>
                <h5 className='md:text-lg text-base md:font-bold font-light
                 font-MacondoRegular capitalize'>{props.title}</h5>
                <span className='text-xs font-MacondoRegular text-white/80'>
                    {props.level}
                </span>
            </div>
            <div className='max-w-1/2 h-2 rounded-full bg-black/30 shadow-inner overflow-hidden'>
                <div className='h-full bg-sky-700 rounded-r-full' style={{ width: props.percentage + "%" }}></div>
            </div>
        </div>
    )
}
