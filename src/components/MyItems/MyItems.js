import React from 'react';
import useProductItems from '../../hooks/useProductItems';
import PageTitleBar from '../PageTitleBar/PageTitleBar';
import TableItem from '../TableItem/TableItem';

const MyItems = () => {
    const [productItems, setProductItems] = useProductItems([])

    const handleDeleteStockItem = _id => {
        const conform = window.confirm('Are you want to delete this Product')
        if (conform) {
            console.log('Product deleted', _id)
            const url = `http://localhost:5000/inventory/${_id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingStock = productItems.filter(item => item._id !== _id)
                        setProductItems(remainingStock)
                    }
                })
        }
    }

    return (
        <section className='py-20'>
            <h3 className='text-center text-3xl uppercase mb-10'>My items: {productItems.length}</h3>
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
                            productItems.map(item => <TableItem
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