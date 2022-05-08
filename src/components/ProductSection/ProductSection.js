import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProductItems from '../../hooks/useProductItems';
import Product from '../Product/Product';

const ProductSection = () => {
    const [productItems] = useProductItems([6])
    const navigate = useNavigate()

    const handleManageProduct = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <section className='bg-sky-50 py-20'>
            <div className='py-10 container mx-auto px-3 md:px-0'>
                <h3 className='text-center text-3xl uppercase mb-8'>Stock Products</h3>
                <div className='grid gap-10 md:grid-cols-3'>
                    {
                        productItems.map(productDetails => <Product
                            key={productDetails._id}
                            productDetails={productDetails}
                            handleManageProduct={handleManageProduct}
                        ></Product>)
                    }

                </div>
                <div className='text-center mt-10'>
                    <Link className='bg-color-primary hover:bg-gray-800 px-10 py-3 mt-3 text-white rounded-full inline-block font-bold' to='/manage-items'> Manage Inventories </Link>

                </div>
            </div>
        </section>
    );
};

export default ProductSection;