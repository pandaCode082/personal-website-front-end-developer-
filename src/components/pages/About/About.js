import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../footer/Footer';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function About() {
    const activeLinkHandler = ({ isActive }) => isActive ? "active" : "",
        navigate = useNavigate(),
        location = useLocation();

    useEffect(() => {
        if (location.pathname === "/about/") {
            navigate("information");
        }
    }, [navigate, location])

    return (
        <div>
            <div className='grid grid-cols-2 mt-10 border-2 text-base w-max mx-auto rounded-xl capitalize [&>a]:h-full overflow-hidden bg-transparent backdrop-blur-lg'>
                <NavLink to={"information"} className={`py-2 px-4 ${activeLinkHandler("/about/information")}`}>about me</NavLink>
                <NavLink to={"resume"} className={`py-2 px-4 ${activeLinkHandler("/about/resume")}`}>my resume</NavLink>
            </div>
            {<Outlet />}
            <Footer />
        </div>
    )
}