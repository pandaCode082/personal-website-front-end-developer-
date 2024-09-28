import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { isLogin } from '../../utils';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
export default function Nav() {

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
        <nav className=' container relative z-50 flex justify-between items-center rounded-none sm:rounded-b-3xl border-b border-gray-600/25 sm:px-10 px-4 py-2 pt-4 xl:py-1 2xl:py-2 shadow-lg bg-white text-xs sm:text-base
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

                        <Link to={"/login"} className='text-sky-600 grid justify-center'>
                            <LoginIcon className='rotate-180' xs={{ fontSize: 60 }} />
                        </Link>

                    </>
                )
            }
            <button className='sm:hidden' onClick={(event) => {
                // --------------------------------->open mobile menu handler
            }}>
                <MenuIcon />
            </button>
        </nav >
    )
}
