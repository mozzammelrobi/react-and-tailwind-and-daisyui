import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';




const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
    },
    {
        id: 4,
        name: "Projects",
        path: "/projects",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const links = navLinks.map(route => <Links key={route.id} route={route}></Links>)
    return (
        <nav className='flex justify-between mt-4'>
            <span onClick={() => setOpen(!open)} className='flex space-x-2'>

                {open ? <X className='md:hidden' /> : <Menu className='md:hidden' />}

                <ul className={`md:hidden absolute duration-1000
                     ${open ? 'top-8' : '-top-64'} bg-black-200 z-10`}>
                    {links}
                </ul>
                <h1>My navbar</h1>
            </span>



            <ul className='md:flex space-x-3 hidden'>
                {
                    links
                }
            </ul>
            <button className='btn btn-outline btn=primary'>Sign In</button>



            {/* <ul>
                {
                    navLinks.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href='/'>Home</a></li>
                <li className='mr-10'><a href='/about'>About</a></li>
                <li className='mr-10'><a href='/blog'>Blog</a></li>
            </ul> */}

        </nav>
    );
};

export default NavBar;