import React from 'react';

const blog = ({ item }) => {
    const { imageUrl, blogHeading, blogDescription } = item
    return (
        <div className='bg-slate-50 rounded-xl shadow-lg'>
            <img className='img-fluid' src={imageUrl} alt="" />
            <div className='p-8 bg-white mx-5 mb-5 rounded-xl'>
                <h3 className='mb-3 text-2xl'>{blogHeading} </h3>
                <p>{blogDescription}</p>
            </div>

        </div>
    );
};

export default blog;