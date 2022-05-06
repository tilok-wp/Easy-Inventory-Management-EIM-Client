import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';


const InventoryItem = () => {
    const { id } = useParams()
    const { register, handleSubmit } = useForm();

    const [productItem, setProductItem] = useProductDetails(id)

    const { _id, price, productName, quantity, supplier, description, picture } = productItem
    // console.log(productItem)
    const onSubmitReStock = async (data) => {
        console.log(data)
    }

    return (
        <section className='py-20 container mx-auto'>
            <div className=' flex'>
                <div className=''>
                    <img src={picture} alt="" />
                </div>
                <div className='p-5 grow-0'>
                    <h3>{productName}</h3>
                    <span>Supplier: {supplier}</span>
                    <div><span>Price: <strong>{price}</strong></span> <span>Stock Quantity: <strong>{quantity}</strong></span></div>
                    <button className='mt-5 bg-color-primary hover:bg-gray-800 font-semibold px-8 py-3 text-white  rounded'>Delivered</button>

                    <h3 className='mt-5 mb-3 '>Restock Item</h3>
                    <form onSubmit={handleSubmit(onSubmitReStock)}>
                        <input className='shadow p-3 mr-2 mb-3 rounded-lg border border-blue-100' placeholder='Re-Stock Quantity' type="number" {...register("quantity", { required: true })} />

                        <input type="submit" value="Update Stock" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-8 py-3 text-white rounded' />

                    </form>
                </div>
            </div>
            <p>{description}</p>
        </section>
    );
};

export default InventoryItem;   