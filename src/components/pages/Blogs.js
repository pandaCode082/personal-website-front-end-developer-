import React from 'react';
export default function Blogs() {
    return (
        <div className='w-full absolute top-0 left-0'>
            <div className='w-full h-[90vh] bg-[url(./../../public/images/3dd65fc2-ad5c-4a48-827e-12b46ea01cef.jpg)] bg-cover bg-top flex items-center'>
                <div className='container w-full h-max flex lg:justify-start justify-center '>

                    <div className='lg:w-1/2 w-full h-96 bg-black/30 shadow-lg backdrop-blur-md lg:text-left text-center text-white p-9 rounded-xl'>
                        <img src="https://s8.uupload.ir/files/pandalogo_4yq6.png" alt="panda-logo" className='inline-block' />
                        <br />
                        <br />
                        <h1 className='font-ConcertOneRegular text-5xl capitalize'>mahdi roohandeh</h1>
                        <br />
                        <p className='text-slate-400/80 line-clamp-4 w-3/4 text-sm lg:mx-0 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nihil doloribus error quis voluptatibus cum, dolorem neque aliquam eligendi. Sed illum eos qui minima commodi est libero saepe dolores officia.</p>
                    </div>
                </div>
            </div>
            <div className='container h-max mt-8 mb-14 flex justify-center gap-x-5'>
                <button className='blogs-category active'>all</button>
                <button className='blogs-category'>category 1</button>
                <button className='blogs-category'>category 2</button>
                <button className='blogs-category'>category 3</button>
                <button className='blogs-category'>category 4</button>
                <button className='blogs-category'>category 5</button>
            </div>

            <div className='container flex gap-6'>
                <div className='flex justify-center gap-9 [&>div]:w-1/2 h-screen w-full bg-sky-600'></div>
                <div className='flex flex-col gap-10 w-[500px] h-[65vh] bg-orange-700'></div>
            </div>
        </div>
    )
}
