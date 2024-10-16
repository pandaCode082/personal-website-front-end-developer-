import React from 'react';
import skils from '../../../../skilsData';
import Skil from './Skil';
export default function Resume() {
    return (
        <>
            <div className='flex flex-col container overflow-x-hidden'>
                <div className='flex justify-between items-end'>

                    <div className='w-7/12 flex flex-col gap-8'>
                        <h1 className='text-6xl capitalize font-bold w-full '>my skills</h1>
                        <div className='relative z-50 w-full h-max rounded-3xl bg-emerald-900 text-white border-[8px] border-neutral-400 bordshadow flex gap-x-10 gap-y-7 flex-wrap justify-center py-10'>
                            {skils.map(skil => <Skil key={skil.id} {...skil} />)}
                        </div>
                    </div>

                    <div className='w-[40%] relative'>
                        <img src="/images/HeaderPanda.png" alt="" />
                        <div className='absolute w-[10000px] bottom-0 left-1/2 -translate-x-1/2 h-[50%] bg-gradient-to-t from-white to-transparent border-b-2'></div>
                    </div>

                </div>
                <article className='mt-12'>
                    <h2 className='text-4xl capitalize font-medium w-full mb-5'>My work history</h2>
                    <p className='font-ConcertOneRegular text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at eligendi vel corrupti eaque facere nobis ea ipsum nihil voluptatem, facilis eius aliquid numquam, alias molestiae eveniet atque aspernatur minima beatae inventore perferendis voluptatibus labore. Suscipit aliquam asperiores labore possimus.</p>
                </article>
            </div>
        </>
    )
}
