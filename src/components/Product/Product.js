import React from 'react';

const Product = ({ productDetails, handleManageProduct }) => {
    const { _id, price, productName, quantity, supplier, description, picture, delivered } = productDetails
    return (
        <div className='p-3 bg-white rounded-xl shadow-lg border border-slate-100 relative overflow-hidden z-9'>
            <div className='text-center'>
                <img className='h-48 mx-auto' src={picture} alt="" />

            </div>
            <div className='px-3'>
                <h3 className='text-xl mt-5 mb-3'>{productName}</h3>
                <div className='flex flex-wrap justify-between my-5'>
                    <span className='block mb-1'> Quantity: {<strong>{quantity}</strong>}  </span>
                    <span className='block'> Supplier: {<strong>{supplier}</strong>}  </span>

                </div>
                <p>{description.slice(0, 100) + '...'} </p>

                <div className='absolute top-0 right-0 bg-slate-500 w-20 rounded-l-lg z-1'>{
                    delivered > 0 ? <><span className='text-xs p-2 text-white bg-teal-400 w-full block text-center rounded-bl-lg'>Sold <span className='bg-white rounded-full p-1 px-2 text-color-primary ml-1'>{delivered}</span></span></> : <><span className='text-xs p-2 text-white bg-lime-600 w-full block text-center rounded-bl-lg'>New</span></>
                }</div>
                <div className='flex flex-wrap justify-between my-5'>
                    <span>Price: $ <strong className='text-lg'> {price}</strong></span>
                    <button onClick={() => handleManageProduct(_id)} className='bg-color-primary font-semibold hover:bg-gray-800 px-5 py-1.5 ml-3 text-white rounded-full'>Update </button>
                </div>

            </div>
        </div >
    );
};

export default Product;