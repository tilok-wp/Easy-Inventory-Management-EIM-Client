import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const { id } = useParams()
    return (
        <div className='py-24'>
            <h3>inventory item: {id}</h3>
        </div>
    );
};

export default InventoryItem;