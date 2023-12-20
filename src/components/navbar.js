'use client';
import { MdClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export default function Navbar() {
    const [isSidebarActive, setIsActivebarActive] = useState(false);


    const toggleSidebar = (value) => {
        setIsActivebarActive(value);
    }
    return (
        <nav className="py-4 px-6 flex justify-between items-center">
            <a href="/" className="flex items-center gap-2">
                {/* // eslint-disable-next-line */}
                <img
                    className="h-16 object-cover"
                    src="assets/logo.png" alt="School Logo" />
                <h2 className="w-[150px] font-semibold break-all">Star School</h2>
            </a>

            <div className="flex">
                <div className='md:hidden'>
                    <button onClick={() => toggleSidebar(true)}>
                        <GiHamburgerMenu size={20} />
                    </button>
                </div>
                <ul className="hidden md:flex gap-6">
                    <li className="font-medium">
                        <a href="/">

                            Home
                        </a>
                    </li>
                    <li className="font-medium"><a href="about">

                        About Us
                    </a>
                    </li>
                    <li className="font-medium"><a href="activities">

                        Activities
                    </a>
                    </li>
                    <li className="font-medium"><a href="events">

                        Events
                    </a>
                    </li>
                    <li className="font-medium"><a href="gallery">

                        Gallery
                    </a>
                    </li>
                    <li className="font-medium"><a href="contact">

                        Contact Us
                    </a>
                    </li>
                </ul>
            </div>
            <div className={`fixed top-0 right-0 z-10 bg-white w-screen h-screen px-8 py-2 md:hidden transition-all ${isSidebarActive ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
                <div className="flex justify-end">
                    <button onClick={() => toggleSidebar(false)}>
                        <MdClose size={25} />
                    </button>
                </div>
                <ul className="flex flex-col gap-6" onClick={() => toggleSidebar(false)}>
                    <li className="font-medium">
                        <a href="/">

                            Home
                        </a>
                    </li>
                    <li className="font-medium"><a href="about">

                        About Us
                    </a>
                    </li>
                    <li className="font-medium"><a href="activities">

                        Activities
                    </a>
                    </li>
                    <li className="font-medium"><a href="events">

                        Events
                    </a>
                    </li>
                    <li className="font-medium"><a href="gallery">

                        Gallery
                    </a>
                    </li>
                    <li className="font-medium"><a href="contact">

                        Contact Us
                    </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}