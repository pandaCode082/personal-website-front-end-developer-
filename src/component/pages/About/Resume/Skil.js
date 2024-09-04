import React from 'react'

export default function Skil(props) {
    return (
        <div className='w-full h-max flex flex-col gap-2'>
            <div>
                <h5>{props.title}</h5>
                <span className='text-xs'>
                    {props.level}
                </span>
            </div>
            <div className='w-full h-2 rounded-full bg-black/30 shadow-inner overflow-hidden'>
                <div className='h-full' style={{ width: props.percentage }}></div>
            </div>
        </div>
    )
}
