import React from 'react';
import Footer from '../../Common/Footer';
import OfftakerNavbar from '../OfftakerNavbar';
import SideNav from '../SideNav';
import ProductList from './ProductList';

const Products = () => {
    return (
        <>
        <div class="container-scroller">
        <SideNav />
        <div class="container-fluid page-body-wrapper">
        <OfftakerNavbar />
        <ProductList />
        </div>
        </div>
        <Footer />
        </>
    );
};

export default Products;