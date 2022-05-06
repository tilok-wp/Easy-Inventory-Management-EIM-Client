import React, { useEffect, useState } from 'react';
import useProductItems from '../../hooks/useProductItems';
import PageTitleBar from '../PageTitleBar/PageTitleBar';

const ManageItems = () => {
    const [stockCount, setStockCount] = useState(0)
    const [productItems, setProductItems] = useProductItems([stockCount])

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

    useEffect(() => {
        fetch('http://localhost:5000/inventorytotal')
            .then(res => res.json())
            .then(data => setStockCount(data.inventoryItemsCount))
    }, [productItems])


    return (
        <section className='py-20'>
            <h3 className='text-center text-3xl uppercase mb-10'>Manage Inventories : {stockCount}</h3>
            <div className='container mx-auto py-5'>
                <ol>

                    {
                        productItems.map(item => <li
                            key={item._id}

                        > {item.productName} || <button onClick={() => handleDeleteStockItem(item._id)}>X</button> || <button>Manage</button> </li>)
                    }

                </ol>
            </div>
            <PageTitleBar title='Home'></PageTitleBar>
        </section>
    );
};

export default ManageItems;