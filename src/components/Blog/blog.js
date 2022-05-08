import React from 'react';

const blog = ({ item }) => {
    const { imageUrl, blogHeading, blogDescription } = item
    return (
        <div className='bg-slate-50 rounded-xl shadow-lg overflow-hidden border border-gray-300'>
            <img className='w-full' src={imageUrl} alt="" />
            <div className='px-8 mt-5 mb-5 rounded-xl'>
                <h3 className='mb-3 text-2xl'>{blogHeading} </h3>
                <p>{blogDescription}</p>
            </div>

        </div>
    );
};

export default blog;