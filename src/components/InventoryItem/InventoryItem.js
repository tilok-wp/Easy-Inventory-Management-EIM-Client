import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetails from '../../hooks/useProductDetails';


const InventoryItem = () => {
    const { id } = useParams()
    const { register, handleSubmit } = useForm();

    const [productItem, setProductItem] = useProductDetails(id)
    // const { _id, price, productName, quantity, supplier, description, picture } = productItem
    const { quantity, delivered, ...rest } = productItem
    const { _id, price, productName, supplier, description, picture } = rest

    // console.log(productItem)
    const onSubmitReStock = async (data) => {
        // const stockQuantity = quantity
        const newQuantiry = parseInt(data.quantity) + parseInt(quantity)
        // const { quantity, ...rest } = productItem
        const newProductItem = {
            ...rest, quantity: newQuantiry, delivered

        }
        const url = `https://secure-earth-46160.herokuapp.com/inventory/${_id}`
        await axios.put(url, newProductItem)
            .then(response => {
                console.log(response.data)
                setProductItem(newProductItem)
            });
        // console.log("Quantity updated by:", newQuantiry + stockQuantity)

    }

    const handleDeliveredItem = async (id) => {
        if (quantity > 0) {
            const newQuantity = quantity - 1
            const newDelivered = delivered + 1
            const newProductItem = {
                ...rest, quantity: newQuantity, delivered: newDelivered

            }
            const url = `https://secure-earth-46160.herokuapp.com/inventory/${_id}`
            await axios.put(url, newProductItem)
                .then(response => {
                    console.log(response.data)
                    setProductItem(newProductItem)
                });

            // setProductItem(newProductItem)
            console.log("Delevered item", id)
        } else {
            toast.error('Product is out of stock now!!!, Try later...')
        }
    }

    return (
        <section className='py-20 container md:w-1/2 mx-auto bg-slate-50 px-5'>
            <div className='grid gap-5 md:grid-cols-2 place-items-center'>
                <div className='flex justify-center items-center '>
                    <img src={picture} alt="" />
                </div>
                <div className='p-5 grow-0'>
                    <h3>{productName}</h3>
                    <span>Supplier: {supplier}</span>
                    <div><span>Price: <strong>{price}</strong></span> <span>Stock Quantity: <strong>{quantity}</strong></span> {delivered ? <><span>Delivered: {delivered} </span></> : ''} </div>
                    <button onClick={() => handleDeliveredItem(_id)} className='mt-5 bg-color-primary hover:bg-gray-800 font-semibold px-8 py-3 text-white  rounded'>Delivered</button>

                    <h3 className='mt-5 mb-3 '>Restock Item</h3>
                    <form onSubmit={handleSubmit(onSubmitReStock)}>
                        <input className='shadow p-3 mr-2 mb-3 rounded-lg border border-blue-100' placeholder='Re-Stock Quantity' type="number" {...register("quantity", { min: 1, required: true })} />

                        <input type="submit" value="Update Stock" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-8 py-3 text-white rounded' />

                    </form>
                </div>
            </div>
            <p>{description}</p>
        </section>
    );
};

export default InventoryItem;   