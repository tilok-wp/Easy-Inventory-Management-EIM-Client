import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ item }) => {
    const nagivate = useNavigate()
    console.log(item)
    const { _id, price, picture, quantity, productName, supplier, description } = item
    const navigateToManage = _id => {
        nagivate(`/inventory/${_id}`)
    }

    return (
        <div>
            <img src={picture} alt="" />
            <h3>Name:{productName}</h3>
            <p>Price:{price}</p>
            <p>Stock Quantity:{quantity}</p>
            <p>Supplier name:{supplier}</p>
            <p>{description}</p>
            <button onClick={() => navigateToManage(_id)}>Manage</button>
        </div>
    );
};

export default ProductItem;