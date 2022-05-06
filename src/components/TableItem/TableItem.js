import React from 'react';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

const TableItem = ({ item, handleDeleteStockItem }) => {
    const { _id, productName, supplier, price, quantity, description, picture } = item

    const navigate = useNavigate()
    const handleManageProduct = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <tr>
            <td><img className='md:w-10 w-20 mx-auto' src={picture} alt="" /></td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>0</td>
            <td>{supplier}</td>
            <td>{description.length > 20 ? description.slice(0, 20) + " ..." : description}</td>
            <td><button onClick={() => handleDeleteStockItem(_id)} className='p-1'><TrashIcon className='h-7 w-7 text-red-700' /></button></td>
            <td><button onClick={() => handleManageProduct(_id)} className='p-1'><PencilAltIcon className='h-7 w-7' /></button></td>
        </tr>
    );
};

export default TableItem;