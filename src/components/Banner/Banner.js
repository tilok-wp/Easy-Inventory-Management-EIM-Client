import React from 'react';
import { Link } from 'react-router-dom';
import inventoryImage from '../../images/inventory-banner-image.png';

const Banner = () => {
    return (
        <section className='container md:grid grid-cols-2 mx-auto py-10'>
            <div className='flex justify-center'>
                <img className='img-fluid' src={inventoryImage} alt="InventoryImage" />
            </div>
            <div className='flex flex-col justify-center px-5 '>
                <h2 className='text-2xl md:text-5xl font-normal leading-loose mb-5'>Welcome come to <strong>EIM </strong> a popular and premium dates<br /> Inventory manager </h2>
                <p className='mb-3 leading-relaxed'>Easy Inventory management (EIM ) is popular <strong>premium Dates</strong> stock house. Hare easily manage stock collection and updates its stock and delivered information.</p>
                <div>
                    <Link to='/manage-items' className='bg-color-primary hover:bg-gray-800 px-10 py-3 mt-3 text-white rounded-full inline-block font-bold'> Manage Stock Items </Link>

                </div>
            </div>
        </section>
    );
};

export default Banner;