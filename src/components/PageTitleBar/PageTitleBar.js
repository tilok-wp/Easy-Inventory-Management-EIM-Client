import React from 'react';
import { Helmet } from 'react-helmet-async'

const PageTitleBar = ({ title }) => {
    return (
        <Helmet>
            <title>{title} || Easy Inventory Management</title>
        </Helmet>
    );
};

export default PageTitleBar;