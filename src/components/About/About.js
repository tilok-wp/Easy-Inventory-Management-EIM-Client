import React from 'react';
import PageTitleBar from '../PageTitleBar/PageTitleBar';

const About = () => {
    return (
        <div className='py-20'>
            <h3 className='text-center text-3xl uppercase mb-10'>About</h3>
            <div className='md:w-1/2 mx-auto'>
                <p>The Easy Inventory (E I M ) is a Bangladesh base dates impoter company, founded by Sir Tilok paul and evolved from a single The Warehouse store to become the country’s largest general merchandise retailer. Our brands include The Warehouse, Warehouse Stationery, Noel Leeming, Torpedo7, and TheMarket.

                    Our purpose is to help Kiwis live better every day. Our vision is to build Dhaka Banglasesh most sustainable, convenient and customer-first company.</p>
            </div>

            <PageTitleBar title='About'></PageTitleBar>
        </div>
    );
};

export default About;