import React from 'react';
import inventoryImage from '../../images/inventory-banner-image.png';

const Banner = () => {
    return (
        <section className='container md:grid grid-cols-2 mx-auto'>
            <div className='flex flex-col justify-center px-5'>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, corporis!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, modi. Cum illum quis quasi distinctio asperiores. Quam repudiandae aliquam facere dolorem, architecto, libero perferendis quo dignissimos a corrupti, ipsam magni!</p>
                <div>
                    <a href="#" className='bg-color-primary hover:bg-gray-800 px-10 py-3 mt-3 text-white rounded inline-block'>Details about </a>

                </div>
            </div>
            <div className='flex justify-center'>
                <img className='img-fluid' src={inventoryImage} alt="InventoryImage" />
            </div>
        </section>
    );
};

export default Banner;