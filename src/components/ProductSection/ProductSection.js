import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductItems from '../../hooks/useProductItems';
import Product from '../Product/Product';

const ProductSection = () => {
    const [productItems] = useProductItems()
    const navigate = useNavigate()

    const handleManageProduct = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <section>
            <div className='py-10 container mx-auto px-3 md:px-0'>
                <h3 className='text-center text-3xl uppercase mb-5'>Stock Products {productItems.length}</h3>
                <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        productItems.map(productDetails => <Product
                            key={productDetails._id}
                            productDetails={productDetails}
                            handleManageProduct={handleManageProduct}
                        ></Product>)
                    }

                </div>
            </div>
        </section>
    );
};

export default ProductSection;