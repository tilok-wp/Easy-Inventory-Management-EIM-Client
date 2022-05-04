import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../utility/ActiveLink/ActiveLink';
import { XIcon, MenuAlt2Icon } from '@heroicons/react/solid'

const Header = () => {
    const [toogle, setToogle] = useState(false)
    return (
        <header className='py-5 bg-white sticky top-0 z-10 shadow-lg shadow-slate-100'>
            <div className='container mx-auto lg:flex justify-between items-center relative px-5'>
                <Link to='/'> Logo </Link>
                <nav className={`flex flex-col md:flex-row absolute text-center md:static w-full md:w-fit bg-gray-50 md:bg-transparent duration-500 ease-in z-0 ${toogle ? 'top-[45px]' : 'top-[-300px]'}`}>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/manage-items'>Manage Items</ActiveLink>
                    <ActiveLink to='/add-item'>Add Item</ActiveLink>
                    <ActiveLink to='/my-items'>My items</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </nav>
                <div className='fixed top-3 right-0 flex items-center md:static z-50'>
                    <Link to='/login'><button className='bg-color-primary font-semibold hover:bg-gray-800 px-5 py-1.5 ml-3 text-white rounded-lg'>Login</button></Link>
                    <div onClick={() => setToogle(!toogle)} className='w-8 h-8 md:hidden ml-5 mr-5'>
                        {toogle ? <XIcon /> : <MenuAlt2Icon />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;