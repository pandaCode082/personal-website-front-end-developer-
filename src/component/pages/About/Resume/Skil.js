import React from 'react'

export default function Skil(props) {
    return (
        <div className='w-5/12 h-max flex flex-col gap-2 '>
            <div className='flex justify-between'>
                <h5 className='text-lg font-MacondoRegular capitalize font-bold'>{props.title}</h5>
                <span className='text-xs font-MacondoRegular'>
                    {props.level}
                </span>
            </div>
            <div className='max-w-1/2 h-2 rounded-full bg-black/30 shadow-inner overflow-hidden'>
                <div className='h-full bg-sky-700 rounded-r-full' style={{ width: props.percentage + "%" }}></div>
            </div>
        </div>
    )
}
