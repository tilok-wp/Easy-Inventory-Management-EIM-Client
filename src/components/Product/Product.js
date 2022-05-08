import React from 'react';

const Product = ({ productDetails, handleManageProduct }) => {
    const { _id, price, productName, quantity, supplier, description, picture } = productDetails
    return (
        <div className='p-5 bg-slate-50 rounded-xl shadow-lg'>
            <h3>{productName}</h3>
            <div className='flex justify-between'>
                <span>Price: {price}</span> <span> Quantity: {quantity}  </span> <span>Supplier name: {supplier}</span>
            </div>
            <p>{description} </p>
            <button onClick={() => handleManageProduct(_id)} className='bg-color-primary font-semibold hover:bg-gray-800 px-5 py-1.5 ml-3 text-white rounded-full'>Update </button>
        </div>
    );
};

export default Product;