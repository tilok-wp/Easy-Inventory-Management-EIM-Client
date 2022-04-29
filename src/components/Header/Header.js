import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../utility/ActiveLink/ActiveLink';

const Header = () => {
    return (
        <header className='py-5 bg-white sticky top-0 z-10 shadow-lg shadow-slate-100'>
            <div className='container mx-auto lg:flex justify-between items-center relative px-5'>
                <Link to='/'> Logo </Link>
                <nav>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/manage-items'>Manage Items</ActiveLink>
                    <ActiveLink to='/add-item'>Add Item</ActiveLink>
                    <ActiveLink to='/my-items'>My items</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;