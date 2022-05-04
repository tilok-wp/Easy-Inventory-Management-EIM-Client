import React from 'react';

const Support = () => {
    return (
        <section className='container mx-auto my-20'>
            <h3 className='text-center text-3xl uppercase mb-10'>Need Support? </h3>
            <div className='grid gap-5 md:grid-cols-2'>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='text-xl'>Live support</h3>
                    <span className='text-xl mt-5'>+88011 223 44 55</span>
                    <a href="tel:880112234455" className='bg-color-primary hover:bg-gray-800 px-10 py-3 mt-3 text-white rounded-full inline-block font-bold'>Call now</a>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='text-xl'>Email support</h3>
                    <span className='text-xl mt-5'>support@email.com</span>
                    <a href="mailto:support@email.com" className='bg-color-primary hover:bg-gray-800 px-10 py-3 mt-3 text-white rounded-full inline-block font-bold'>Email Now</a>
                </div>
            </div>
        </section>
    );
};

export default Support;