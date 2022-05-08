import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../utility/ActiveLink/ActiveLink';
import { XIcon, MenuAlt2Icon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const signOutHandle = () => {
        signOut(auth)
    }
    const [toogle, setToogle] = useState(false)
    return (
        <header className='py-3 bg-white sticky top-0 z-10 shadow-lg shadow-slate-100'>
            <div className='container md:mx-auto lg:flex justify-between items-center relative'>
                <Link to='/'> <img className='ml-3' src={logo} alt="Logo" /> </Link>
                <nav className={`flex flex-col md:flex-row absolute text-center md:static w-full md:w-fit bg-gray-300 md:bg-transparent duration-500 ease-in z-0 ${toogle ? 'top-[65px]' : 'top-[-300px]'}`}>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/about'>About</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                    {user ? <>
                        <ActiveLink to='/manage-items'>Manage Items</ActiveLink>
                        <ActiveLink to='/add-item'>Add Item</ActiveLink>
                        <ActiveLink to='/my-items'>My items</ActiveLink>
                    </> : ''

                    }

                </nav>
                <div className='fixed top-5  right-0 flex items-center md:static z-50'>
                    {
                        user ? <> <button onClick={signOutHandle} className='bg-color-primary font-semibold hover:bg-gray-800 px-5 py-1.5 ml-3 text-white rounded-full'>Sign out </button><img className='w-10 h-10 border-2 border-cyan-400 rounded-full ml-1 ' src={user?.photoURL} alt="" /></> : <Link to='/login'><button className='bg-color-primary font-semibold hover:bg-gray-800 px-5 py-1.5 ml-3 text-white rounded-full'>Login</button></Link>
                    }
                    <div onClick={() => setToogle(!toogle)} className='w-8 h-8 md:hidden ml-5 mr-5'>
                        {toogle ? <XIcon /> : <MenuAlt2Icon />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;