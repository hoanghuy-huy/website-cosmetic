import React from 'react';
import './ProductPage.scss';
import CardProduct from '~/components/CardProduct';
import ScrollToTop from '~/components/ScrollToTop';
const ProductPage = () => {
    ScrollToTop()
    return (
        <div className="product-page section">
            <div className="container">
                <div className="product-wrap">
                    <h1 className="title">Sản phẩm</h1>
                    <div className="product-list">
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
