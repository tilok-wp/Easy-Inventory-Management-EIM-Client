import React from 'react';
import useProductItems from '../../hooks/useProductItems';
import Banner from '../Banner/Banner'
import ProductItem from '../ProductItem/ProductItem';


const Home = () => {
    const [productItems, setProductItems] = useProductItems()
    return (
        <div>
            <Banner></Banner>
            <div className='py-10 container mx-auto'>
                <h3 className='text-center text-3xl uppercase mb-5'>Stock Products {productItems.length}</h3>
                <div className='grid grid-cols-3'>
                    {
                        productItems.map(item => <ProductItem
                            key={item._id}
                            item={item}
                        ></ProductItem>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;