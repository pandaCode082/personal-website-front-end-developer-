import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { isLogin } from '../../utils';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
export default function Nav() {
    const [isNavModalOpen, setNavModalStatus] = useState(false),
        // --------------------------------->open and close mobile menu handler
        menuToggelHandler = () => setNavModalStatus((prev) => !prev);


    const activeLinkHandler = ({ isActive }) => isActive ? `
    text-black
    md:text-xl
    text-base
    font-bold
    capitalize
    transition-all
    border-b-4
    border-sky-700/50
    rounded-b-md`
        : `
        capitalize
        transition-all
        rounded-b-md`;

    return (
        <nav className=' container relative z-50 flex justify-between items-center rounded-none sm:rounded-b-3xl sm:border-b border-gray-600/25 sm:px-10 px-4 py-2 pt-4 xl:py-1 2xl:py-2 sm:shadow-lg sm:bg-white text-xs sm:text-base
        '>
            <div className='w-16 aspect-[1/1] place-content-center sm:grid hidden'>
                <Link to={"/"} > logo </Link>
            </div>
            <div className='md:space-x-12 sm: space-x-5 [&>a:hover]:border-b-4 2xl:text-base text-sm sm:block hidden'>
                <NavLink className={activeLinkHandler} to={"/about/"} > about</NavLink>
                <NavLink className={activeLinkHandler} to={"/contact"} > contact</NavLink>
                <NavLink className={activeLinkHandler} to={"/"} > home</NavLink>
                <NavLink className={activeLinkHandler} to={"/Courses"} > Courses</NavLink>
                <NavLink className={activeLinkHandler} to={"/cart"} > cart</NavLink>
            </div>

            {
                isLogin("mahdi") ? (
                    <Link to={"/panel"} className='nav-btn capitalize bg-sky-700 text-white hover:bg-sky-600'> panel</Link>
                ) : (
                    <>

                        <Link to={"/login"} className='text-sky-600 grid justify-center z-[999]'>
                            <LoginIcon className={`rotate-180 transition-colors duration-500 ${isNavModalOpen ? "text-white" : "text-sky-700"}`} sx={{ fontSize: 40 }} />
                        </Link>

                    </>
                )
            }
            <div className='sm:hidden h-10 flex items-center justify-center'>
                <button onClick={menuToggelHandler} className={`z-[999] transition-colors duration-500 ${isNavModalOpen ? "text-white" : "text-sky-700"}`}>
                    {
                        isNavModalOpen ?
                            <CloseIcon sx={{ fontSize: 40 }} /> : <MenuIcon sx={{ fontSize: 40 }} />
                    }
                </button>

                <div className={`fixed right-0 ${isNavModalOpen ? "opacity-100 visible" : "opacity-0 invisible"} top-0 z-[990] w-full h-screen bg-sky-900/50 backdrop-blur text-white transition-all duration-500`}>
                    <div className='flex flex-col gap-4 text-xl text-center capitalize font-medium pt-40 w-max mx-auto [&>a]:p-2 [&>a]:rounded-lg'>
                        <NavLink onClick={menuToggelHandler} to={"/"} > home</NavLink>
                        <NavLink onClick={menuToggelHandler} to={"/about/"} > about</NavLink>
                        <NavLink onClick={menuToggelHandler} to={"/Courses"} > Courses</NavLink>
                        <NavLink onClick={menuToggelHandler} to={"/contact"} > contact</NavLink>
                        <NavLink onClick={menuToggelHandler} to={"/cart"} > cart</NavLink>
                    </div>
                </div>
            </div>
        </nav >
    )
}
