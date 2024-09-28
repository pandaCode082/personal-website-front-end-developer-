import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function About() {
    const [activeLink, setActiveLink] = useState("/about/information"),
        clickLinkhandler = event => setActiveLink(event.nativeEvent.target.getAttribute("href")),
        activeLinkHandler = linkPath => linkPath === activeLink ? "active" : "";

    return (
        <div>
            <div className='grid grid-cols-2 mt-10 border-2 text-base w-max mx-auto rounded-xl capitalize [&>a]:h-full overflow-hidden bg-transparent backdrop-blur-lg'>
                <Link onClick={clickLinkhandler} to={"information"} className={`py-2 px-4 ${activeLinkHandler("/about/information")}`}>about me</Link>
                <Link onClick={clickLinkhandler} to={"resume"} className={`py-2 px-4 ${activeLinkHandler("/about/resume")}`}>my resume</Link>
            </div>

            {<Outlet />}
        </div>
    )
}
