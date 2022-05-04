import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const InventoryItem = () => {
    const { id } = useParams()

    const [productItem, setProductItem] = useState()

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProductItem(data)
                console.log(productItem)
            })

    }, [id])

    return (
        <div className='py-24'>
            <h3>inventory item: {id}</h3>
        </div>
    );
};

export default InventoryItem;   