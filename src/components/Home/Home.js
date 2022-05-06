import React from 'react';
import Banner from '../Banner/Banner'
import Features from '../Features/Features';
import PageTitleBar from '../PageTitleBar/PageTitleBar';
import ProductSection from '../ProductSection/ProductSection';
import Support from '../Support/Support';
import TopSupplier from '../TopSupplier/TopSupplier';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductSection></ProductSection>
            <TopSupplier></TopSupplier>
            <Features></Features>
            <Support></Support>
            <PageTitleBar title='Home'></PageTitleBar>
        </div>
    );
};

export default Home;