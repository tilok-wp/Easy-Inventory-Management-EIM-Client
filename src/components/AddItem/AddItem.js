import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import PageTitleBar from '../PageTitleBar/PageTitleBar';
const axios = require('axios')

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const handleAddItem = (data, e) => {
        const productName = data.productName
        const price = data.price
        const quantity = data.quantity
        const description = data.description
        const supplier = data.supplier
        const picture = data.picture
        const userEmail = user?.email

        const newProduct = {
            productName: productName,
            price: price,
            quantity: quantity,
            description: description,
            supplier: supplier,
            picture: picture,
            userEmail: userEmail,
            delivered: 0
        }


        axios.post('https://secure-earth-46160.herokuapp.com/inventory', newProduct)
            .then(res => {
                const { data, status } = res
                if (data.insertedId && status === 200) {
                    toast.success(`New item Added!! ID: ${data.insertedId}`)
                    e.target.reset()
                } else {
                    toast.error('Some thing wrong!! Try again')
                }
            })

    };
    return (
        <div className='py-20 container md:mx-auto px-3 md:px-0'>
            <h3 className='text-center text-3xl mb-5'>Add Stock Item</h3>
            <form onSubmit={handleSubmit(handleAddItem)} className='md:w-1/2 mx-auto'>
                <input className='shadow w-full p-3 mb-2 rounded-lg border border-blue-100' placeholder='Product name' type="text" {...register("productName", { required: true })} />
                <div className='grid gap-2 md:grid-cols-3'>
                    <input className='shadow p-3 mb-2 rounded-lg border border-blue-100' placeholder='Price' type="number" {...register("price", { min: 0, required: true })} />
                    <input className="shadow p-3 mb-2 ml-1 rounded-lg border border-blue-100" placeholder='Quantity' type="number" {...register("quantity", { min: 0, required: true })} />
                    <select className='shadow p-3 mb-2 rounded-lg border border-blue-100' {...register("supplier")}>
                        <option value=" ">Choose supplier</option>
                        <option value="Happlilo">Happlilo</option>
                        <option value="Lagom">Lagom</option>
                        <option value="Organicali">Organicali</option>
                        <option value="Dry Fruit Hub">Dry Fruit Hub</option>
                        <option value="BerrLes & Nuts">BerrLes & Nuts</option>
                    </select>
                </div>
                <textarea className='shadow w-full p-3 mb-2 rounded-lg border border-blue-100 resize-none h-40' {...register("description", { required: true })}></textarea>
                <input className='shadow w-full p-3 mb-2 rounded-lg border border-blue-100' placeholder='Product image url' type="url" {...register("picture", { required: true })} />
                <input type="submit" value="Submit" className='cursor-pointer bg-color-primary hover:bg-gray-800 font-semibold px-12 py-3 mt-3 mx-auto text-white  rounded block' />

            </form>
            <PageTitleBar title='Add Product'></PageTitleBar>
        </div>
    );
};

export default AddItem;