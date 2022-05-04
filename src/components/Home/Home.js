import React from 'react';
import useProductItems from '../../hooks/useProductItems';
import Banner from '../Banner/Banner'
import Features from '../Features/Features';
import PageTitleBar from '../PageTitleBar/PageTitleBar';
import Product from '../Product/Product';
import Support from '../Support/Support';
import TopSupplier from '../TopSupplier/TopSupplier';


const Home = () => {
    const [productItems, setProductItems] = useProductItems()
    return (
        <div>
            <Banner></Banner>
            <div className='py-10 container mx-auto px-3 md:px-0'>
                <h3 className='text-center text-3xl uppercase mb-5'>Stock Products {productItems.length}</h3>
                <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        productItems.map(productDetails => <Product
                            key={productDetails._id}
                            productDetails={productDetails}
                        ></Product>)
                    }

                </div>
            </div>
            <TopSupplier></TopSupplier>
            <Features></Features>
            <Support></Support>
            <PageTitleBar title='Home'></PageTitleBar>
        </div>
    );
};

export default Home;