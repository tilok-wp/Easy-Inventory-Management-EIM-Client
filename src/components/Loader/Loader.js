import React from 'react';
import loaderImage from '../../images/loader.gif'

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-24'>
            <img className='w-44' src={loaderImage} alt="loaderImage" />
        </div>
    );
};

export default Loader;