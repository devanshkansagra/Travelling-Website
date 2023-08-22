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
            <nav className="navbar bg-blue-900 py-1 text-white flex justify-around items-center">
                <div className="title text-lg md:text-3xl font-sans font-bold">TRAVEL <span className='text-yellow-400'>EASE</span></div>
                <div className="md:static absolute md:min-h-fit bg-blue-900 left-0 top-[-100%] w-full md:w-auto h-auto nav-links transition-all md:duration-100 delay-100 py-4 md:py-0 z-[-1] md:z-[10]">
                    <ul className="flex md:flex-row flex-col bg-blue-900">
                        <li className='mx-2 text-white px-4 py-2 nav-link my-3'><Link to="/" className='font-medium text-xl'><i className="fa-solid fa-plane-departure"></i>&nbsp;&nbsp;Flights</Link></li>
                        <li className='mx-2 text-white px-4 py-2 nav-link my-3'><Link to="/hotel" className='font-medium text-xl'><i className="fa-solid fa-hotel"></i>&nbsp;&nbsp;Hotels</Link></li>
                        <li className='mx-2 text-white px-4 py-2 nav-link my-3'><Link to="/train" className='font-medium text-xl'><i className="fa-solid fa-train"></i>&nbsp;&nbsp;Trains</Link></li>
                        <li className='mx-2 text-white px-4 py-2 nav-link my-3'><Link to="/bus" className='font-medium text-xl'><i className="fa-solid fa-bus"></i>&nbsp;&nbsp;Buses</Link></li>
                        <li className='mx-2 bg-white text-blue-900 px-7 py-3 rounded-2xl nav-link my-3'><Link to="/login" className=''><i className="fa-solid fa-right-to-bracket fa-sm md:fa-2xl"></i>&nbsp;&nbsp; /&nbsp;&nbsp;<i className="fa-solid fa-user-plus fa-sm md:fa-2xl"></i>&nbsp;&nbsp;</Link></li>
                    </ul>
                </div>
                <div className="flex items-center gap-6 md:hidden mx-5 text-3xl">
                    <ion-icon onClick={toggleMenu} id="menu" name="menu" className="text-3xl"></ion-icon>
                </div>
            </nav>
        </div>
    )
}

export default Navbar