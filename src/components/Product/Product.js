import React from 'react';

const Product = ({ productDetails, handleManageProduct }) => {
    const { _id, price, productName, quantity, supplier, description, picture } = productDetails
    return (
        <div className='p-5 bg-slate-50 rounded-xl shadow-lg'>
            <h3>Product name:</h3>
            <div className='flex justify-between'>
                <span>Price: </span> <span> Quantity:  </span> <span>Supplier name:</span>
            </div>
            <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi! </p>
            <button onClick={() => handleManageProduct(_id)} className='bg-color-primary font-semibold hover:bg-gray-800 px-5 py-1.5 ml-3 text-white rounded-full'>Update </button>
        </div>
    );
};

export default Product;