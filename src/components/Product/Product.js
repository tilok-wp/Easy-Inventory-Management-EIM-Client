import React from 'react';

const Product = () => {
    return (
        <div className='p-5 bg-slate-50 rounded-xl shadow-lg'>
            <h3>Product name:</h3>
            <div className='flex justify-between'>
                <span>Price: </span> <span> Quantity:  </span> <span>Supplier name:</span>
            </div>
            <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi! </p>
            <button>Update </button>
        </div>
    );
};

export default Product;