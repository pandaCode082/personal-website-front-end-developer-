import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {

    function activeLinkHandler(targetPath) {
        // console.log(props.pagePath.trim === targetPath.trim);
        if (props.pagePath.trim() === targetPath.trim()) {
            return "text-black text-xl font-bold"
        } else {
            return ""
        }
    }

    return (
        <nav className='container relative z-50 flex justify-between items-center rounded-b-3xl border-b border-gray-600/25 px-10 shadow-lg bg-white'>
            <div className='w-16 aspect-[1/1] grid place-content-center'>
                <Link to={"/"} > logo </Link>
            </div>
            <div className='space-x-12 [&>a:hover]:border-b-4'>
                <Link className={`capitalize transition-all ${activeLinkHandler("/about")}`} to={"/about/information"} > about</Link>
                <Link className={`capitalize transition-all ${activeLinkHandler("/contact")}`} to={"/contact"} > contact</Link>
                <Link className={`capitalize transition-all ${activeLinkHandler("/")}`} to={"/"} > home</Link>
                <Link className={`capitalize transition-all ${activeLinkHandler("/shop")}`} to={"/shop"} > shop</Link>
                <Link className={`capitalize transition-all ${activeLinkHandler("/cart")}`} to={"/cart"} > cart</Link>
            </div>
            <div className='space-x-7 capitalize [&>a]:nav-btn'>
                <Link to={"/login"} className=' bg-sky-700 text-white hover:bg-sky-600'> login</Link>
                <Link to={"/signUp"} className='border-sky-700 border text-sky-700 opacity-40 hover:opacity-100'> sign up</Link>
            </div>
        </nav >
    )
}
