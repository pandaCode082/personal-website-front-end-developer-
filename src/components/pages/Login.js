import React, { useState } from 'react'

export default function Login() {
    const [showForm, setForm] = useState("login"),
        setActive = (target) => target === showForm && "active";



    return (
        <div className='container flex flex-col gap-5 items-center'>
            <div className='grid grid-cols-2 mt-10 border-2 text-base w-max mx-auto rounded-xl overflow-hidden bg-transparent backdrop-blur-lg [&>button]:h-full [&>button.active]:bg-sky-600 '>

                <button className={`py-2 px-4 capitalize ${setActive("sign-up")}`}
                    onClick={() => setForm("sign-up")}
                >
                    sign up
                </button>
                <button className={`py-2 px-4 capitalize ${setActive("login")}`}
                    onClick={() => setForm("login")}
                >
                    login
                </button>

            </div>


            <div className='relative 2xl:w-[850px] xl:w-[700px] w-[82%] md:aspect-[1/0.6] h-max border border-solid border-sky-600 shadow-xl shadow-sky-800/50 text-sky-700 bg-gray-300/30 backdrop-blur-sm flex rounded-2xl [&>div.sign-up]:right-0 [&>div.login]:left-0'>

                <div className={`absolute py-10 top-0 transition duration-500 w-1/2 h-full bg-sky-600 rounded-2xl pt-10 pb-5 md:flex hidden flex-col justify-between ${showForm}`}>
                    <div className='space-y-10'>
                        {
                            showForm === "login" ?
                                <>
                                    <h1 className='text-5xl font-bold text-center text-white capitalize'>login</h1>
                                    <p className='font-MacondoRegular text-white/70 w-9/12 text-center mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quod?</p>
                                </>
                                :
                                <>
                                    <h1 className='text-5xl font-bold text-center text-white capitalize'>sign up</h1>
                                    <p className='font-MacondoRegular text-white/70 w-9/12 text-center mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quod?</p>
                                </>
                        }
                    </div>

                    {/* ---------------------------------------------------------- */}
                    <div className='flex gap-3 font-MacondoRegular text-white/50 text-xs w-max mx-auto'>
                        <span>help</span>
                        <span>help</span>
                        <span>help</span>
                    </div>

                </div>
                {/* ------------- form ------------- */}
                {/* ------------- sign up ------------- */}
                <form className={`md:flex flex-col w-full h-full p-5 md:gap-4 gap-5 justify-center items-center [&>label]:user-input-box ${showForm === "login" ? "hidden" : "flex"}`}>

                    <h2 className='block md:hidden text-5xl capitalize font-ConcertOneRegular font-bold my-5'>sign up</h2>

                    <label htmlFor="userName">
                        <input type="text" id='userName' placeholder='enter username' required />
                    </label>

                    <label htmlFor="email">
                        <input type="email" id="email" placeholder='enter your email' required />
                    </label>
                    <label htmlFor="password">
                        <input type="password" id='password' placeholder='create a password' required />
                    </label>
                    <label htmlFor="confrim-password">
                        <input type="password" id='confrim-password' placeholder='confrim your password' required />
                    </label>
                    <label htmlFor="rules" className='text-left text-xs font-MacondoRegular block'>
                        <input type="checkbox" name="rules" id="rules" className='mx-1' required />
                        <span>Do you accept the rules and regulations?</span>
                    </label>
                    <input type="submit" value="submit" className='submit-btn' />
                </form>
                {/* ------------- login ------------- */}
                <form className={`md:flex flex-col w-full h-full md:p-5 pt-6 pb-10 gap-7 justify-center items-center login-form [&>label]:user-input-box ${showForm === "login" ? "flex" : "hidden"}`}>
                    <h2 className='block md:hidden text-5xl capitalize font-ConcertOneRegular font-bold'>login</h2>

                    <label htmlFor="userName-email">
                        <input type="text" id='userName-email' placeholder='enter your (username/email)' required />
                    </label>

                    <label htmlFor="password">
                        <input type="password" id='password' placeholder='enter your password' required />
                    </label>

                    <input type="submit" value="submit" className='submit-btn' />
                </form>

            </div>
        </div >
    )
}
