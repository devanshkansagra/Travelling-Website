import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    function toggleMenu(e) {
        let menu = document.getElementById("menu");
        let navLinks = document.querySelector(".nav-links");
        if (menu.name === "menu") {
            menu.name = "close";
        }
        else {
            menu.name = "menu";
        }
        navLinks.classList.toggle("top-[7%]");
    }
    return (
        <div>
            <nav className="navbar bg-blue-900 py-2 text-white flex justify-around items-center">
                <div className="title text-lg md:text-3xl font-sans font-bold">TRAVEL <span className='text-yellow-400'>EASE</span></div>
                <div className="md:static absolute md:min-h-fit bg-blue-900 left-0 top-[-100%] w-full md:w-auto h-auto nav-links transition-all md:duration-100 delay-100 py-4 md:py-0 z-[-1] md:z-[10]">
                    <ul className="flex md:flex-row flex-col bg-blue-900">
                        <li className='mx-2 bg-white text-blue-900 px-7 py-2 rounded-2xl nav-link my-3'><a href="/flight" className='font-sans'><i className="fa-solid fa-plane-departure"></i>&nbsp;&nbsp;Flights</a></li>
                        <li className='mx-2 bg-white text-blue-900 px-7 py-2 rounded-2xl nav-link my-3'><a href="/hotel" className='font-sans'><i className="fa-solid fa-hotel"></i>&nbsp;&nbsp;Hotels</a></li>
                        <li className='mx-2 bg-white text-blue-900 px-7 py-2 rounded-2xl nav-link my-3'><a href="/train" className='font-sans'><i className="fa-solid fa-train"></i>&nbsp;&nbsp;Trains</a></li>
                        <li className='mx-2 bg-white text-blue-900 px-7 py-2 rounded-2xl nav-link my-3'><a href="/cab" className='font-sans'><i className="fa-solid fa-taxi"></i>&nbsp;&nbsp;Cabs</a></li>
                        <li className='mx-2 bg-white text-blue-900 px-7 py-2 rounded-2xl nav-link my-3'><a href="/cruise" className='font-sans'><i className="fa-solid fa-ship"></i>&nbsp;&nbsp;Cruises</a></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <ul className="flex flex-wrap">
                        <li className='mx-1 bg-white text-blue-900 px-4 py-1 md:mx-2 md:px-7 md:py-2 rounded-2xl nav-link'><Link to="/login" className='font-sans'><i className="fa-solid fa-right-to-bracket fa-sm md:fa-2xl"></i>&nbsp;&nbsp; /&nbsp;&nbsp;<i className="fa-solid fa-user-plus fa-sm md:fa-2xl"></i>&nbsp;&nbsp;</Link></li>
                    </ul>
                    <div className="flex items-center gap-6 md:hidden mx-5 text-3xl">
                        <ion-icon onClick={toggleMenu} id="menu" name="menu" className="text-3xl"></ion-icon>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar