import React from 'react';
import skils from '../../../../skilsData';
import Skil from './Skil';
export default function Resume() {
    return (
        <>
            <div className='flex flex-col container overflow-x-hidden 2xl:mt-0 mt-14 text-center xl:text-left'>
                <div className='flex justify-between xl:items-end items-center xl:flex-row flex-col-reverse xl:gap-0 gap-10'>

                    <div className='2xl:w-7/12 w-full flex flex-col gap-8'>

                        <div className='relative z-20 2xl:w-full w-[88%] mx-auto h-max rounded-3xl bg-emerald-900 text-white md:border-[8px] border-[6px] border-neutral-400 bordshadow flex gap-x-10 gap-y-7 flex-wrap justify-center py-10 px-2'>
                            <h1 className='text-4xl capitalize w-full text-center mb-3 font-ConcertOneRegular font-light '>my skills</h1>
                            {skils.map(skil => <Skil key={skil.id} {...skil} />)}
                        </div>
                    </div>

                    <div className='md:w-[40%] w-[60%] relative'>
                        <img src="/images/HeaderPanda.png" alt="me" />
                        <div className='absolute w-[10000px] bottom-0 left-1/2 -translate-x-1/2 h-[50%] bg-gradient-to-t from-white to-[#ffffff01] xl:border-b-2'></div>
                    </div>

                </div>
                <article className='mt-12 md:w-full w-10/12 mx-auto'>
                    <h2 className='md:text-4xl text-2xl capitalize font-medium w-full mb-5'>My work history</h2>
                    <p className='font-ConcertOneRegular md:text-base text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at eligendi vel corrupti eaque facere nobis ea ipsum nihil voluptatem, facilis eius aliquid numquam, alias molestiae eveniet atque aspernatur minima beatae inventore perferendis voluptatibus labore. Suscipit aliquam asperiores labore possimus.</p>
                </article>
            </div>
        </>
    )
}
