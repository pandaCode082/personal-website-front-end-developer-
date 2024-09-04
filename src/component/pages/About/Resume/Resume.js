import React from 'react'
export default function Resume() {
    return (
        <div className='flex flex-col container'>
            <div className='flex justify-between items-center'>

                <div className='w-7/12 flex flex-col gap-8'>

                    <h1 className='text-6xl capitalize font-bold w-full '>my skills</h1>
                    <div className='w-full min-h-96 rounded-3xl bg-black/20'>

                    </div>
                </div>

                <div className='w-[40%] relative'>
                    <img src="/images/HeaderPanda.png" alt="" />
                    <div className='absolute w-full bottom-0 left-1/2 -translate-x-1/2 h-[50%] bg-gradient-to-t from-white to-transparent'></div>
                </div>


            </div>
            <article>
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at eligendi vel corrupti eaque facere nobis ea ipsum nihil voluptatem, facilis eius aliquid numquam, alias molestiae eveniet atque aspernatur minima beatae inventore perferendis voluptatibus labore. Suscipit aliquam asperiores labore possimus.</p>
            </article>
        </div>
    )
}
