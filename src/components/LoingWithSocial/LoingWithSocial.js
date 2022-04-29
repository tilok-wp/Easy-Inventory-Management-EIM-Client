import React from 'react';
import googleIcon from '../../images/google.png'
import facebookIcon from '../../images/facebook.png'

const LoingWithSocial = () => {
    return (
        <div>
            <div className='flex items-center py-5'>
                <div className='bg-gray-500 grow h-px fle mr-3'></div> <strong>OR LOGIN WITH</strong> <div className='grow bg-gray-500 h-px ml-3'></div>
            </div>
            <div className='text-center'>
                <button className='rounded-full p-3 border-8 m-2 border-gray-300 shadow-2xl'><img src={googleIcon} alt="GoogleIcon" /></button>
                <button className='rounded-full p-3 border-8 m-2 border-gray-300 shadow-2xl'><img src={facebookIcon} alt="GoogleIcon" /></button>
            </div>
        </div>
    );
};

export default LoingWithSocial;