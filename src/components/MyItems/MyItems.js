import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitleBar from '../PageTitleBar/PageTitleBar';
import TableItem from '../TableItem/TableItem';
import { signOut } from 'firebase/auth';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([])
    const handleDeleteStockItem = _id => {
        const conform = window.confirm('Are you want to delete this Product')
        if (conform) {
            console.log('Product deleted', _id)
            const url = `https://secure-earth-46160.herokuapp.com/inventory/${_id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingStock = myProducts.filter(item => item._id !== _id)
                        setMyProducts(remainingStock)
                    }
                })
        }
    }

    const navigate = useNavigate()
    useEffect(() => {
        const getStockItem = async () => {
            const email = user.email
            const url = `https://secure-earth-46160.herokuapp.com/myinventory?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('secretToken')}`
                    }
                })
                setMyProducts(data)
            }
            catch (error) {
                toast.error(error.response.data.message)
                signOut(auth)
                navigate('/login')

            }
        }
        getStockItem()
    }, [user, navigate])

    return (
        <section className='py-20'>
            <h3 className='text-center text-3xl uppercase mb-10'>My items: {myProducts.length}</h3>
            <div className='container mx-auto py-5'>
                <table className='manage-product'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Total Delivered</th>
                            <th>Supplier</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map(item => <TableItem
                                key={item._id}
                                item={item}
                                handleDeleteStockItem={handleDeleteStockItem}
                            ></TableItem>)}
                    </tbody>
                </table>
            </div>
            <PageTitleBar title='My Items'></PageTitleBar>
        </section>
    );
};

export default MyItems;