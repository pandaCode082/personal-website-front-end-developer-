import React from 'react';
import Nav from '../navigation-bar/Nav';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';
import { FaDiscord } from "react-icons/fa6";

export default function Contact() {
    return (
        <>
            <Nav pagePath={"/contact"} />

            <div className='container h-[80vh] flex gap-24 justify-center items-center'>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14087.510659442678!2d57.98418196675618!3d28.028214657129723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3efae9c5524c167d%3A0x3f3db8dc85f65ee4!2sRudbar%2C%20Kerman%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1725193010680!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no - referrer - when - downgrade" title='roodbar'
                    className='border-sky-600 border rounded-xl w-[450px] aspect-[1/0.8] shadow-xl outline-none'
                ></iframe>
                <div className='flex gap-9'>

                    <form className='flex flex-col gap-4 bg-sky-500 rounded-2xl p-6 w-96 aspect-[1/0.7] [&>label]:w-full [&>label]:input-box shadow-xl' >
                        <label htmlFor="userName">
                            <PersonIcon />
                            <input type="text" placeholder='username' id='userName' autoComplete='off' />
                        </label>

                        <label htmlFor="email">
                            <EmailIcon />
                            <input type="email" placeholder='email' id='email' autoComplete='off' />
                        </label>

                        <label htmlFor="massage">
                            <textarea name="massage" id="massage" placeholder="enter you'r massage" className='resize-none w-full h-32 rounded-2xl p-4 outline-none'></textarea>
                        </label>

                        <input type="submit" value="send" className='capitalize font-bold text-lg hover:text-sky-700 hover:bg-white transition-colors duration-500 self-center nav-btn bg-sky-400 cursor-pointer text-white w-64' />

                    </form>

                </div>

                <div className='w-max flex gap-8 items-center justify-between absolute bottom-11 '>
                    <Tooltip className='capitalize' title="email" placement="top">
                        <a className='contact-btn' href='mailto:mahdiroohandeh@gmail.com'><EmailIcon fontSize='large' /></a>
                    </Tooltip>
                    <Tooltip className='capitalize' title="telegram" placement="top">
                        <a className='contact-btn' href="tg://resolve?domain=PANDA_Code_00"><TelegramIcon fontSize='large' /></a>
                    </Tooltip>
                    <Tooltip className='capitalize' title="discord" placement="top">
                        <a className='contact-btn' target='blank' href='https://discord.com/invite/tqgBXq4C'><FaDiscord size={"40"} /></a>
                    </Tooltip>
                    <Tooltip className='capitalize' title="instagram" placement="top">
                        <a className='contact-btn' target='blank' href='https://www.instagram.com/panda_code__?igsh=MWpmYzBibWM3NWI3cA=='><InstagramIcon fontSize='large' /></a>
                    </Tooltip>
                    <Tooltip className='capitalize' title="call" placement="top">
                        <a className='contact-btn' href='tel:09304213867'><CallIcon fontSize='large' /></a>
                    </Tooltip>


                </div>

            </div >
        </>)
}
