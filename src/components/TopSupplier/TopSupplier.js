import React from 'react';

const TopSupplier = () => {
    return (
        <section className='container mx-auto mt-10 mb-20 py-5 md:py-0'>
            <h3 className='text-center text-3xl uppercase mb-8'>Top Suppliers </h3>
            <div className='grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                <div className='border border-sky-100 flex justify-center items-center min-h'><img src="https://i.ibb.co/dLf43MG/Sup-1.jpg" alt="" /></div>
                <div className='border border-sky-100 flex justify-center items-center min-h'><img src="https://i.ibb.co/3y8M46j/Sup-2.jpg" alt="" /></div>
                <div className='border border-sky-100 flex justify-center items-center min-h'><img src="https://i.ibb.co/LdQwcQs/Sup-3.jpg" alt="" /></div>
                <div className='border border-sky-100 flex justify-center items-center min-h'><img src="https://i.ibb.co/9hwZCy4/Sup-4.jpg" alt="" /></div>
                <div className='border border-sky-100 flex justify-center items-center min-h'><img src="https://i.ibb.co/ZShshBv/Sup-5.jpg" alt="" /></div>
                <div className='border border-sky-100 flex justify-center items-center min-h'><img src="https://i.ibb.co/m6p66nk/Sup-6.jpg" alt="" /></div>

            </div>
        </section>
    );
};

export default TopSupplier;