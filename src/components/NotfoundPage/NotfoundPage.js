import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404-image.png'

const NotfoundPage = () => {
    return (
        <div className='py-20 text-center'>
            <img className='mx-auto' src={notFoundImg} alt="notFoundImage" />
            <p className='text-4xl uppercase'>Page not found!!!</p>
            <Link to='/' className='bg-color-primary hover:bg-gray-800 font-bold px-10 py-3 mt-3 text-white rounded inline-block'> Go Home</Link>
        </div>
    );
};

export default NotfoundPage;