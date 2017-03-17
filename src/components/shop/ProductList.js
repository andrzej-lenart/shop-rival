import React, { PropTypes } from 'react';
import ProductItem from './ProductItem';
import Pager from '../common/Pager';

const propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
};

const ProductList = ({ products }) => (
    <section>
        <div className="row">
            {products.map((product) => (
                <div className="col-sm-6 col-md-4 col-lg-4" key={product.id}>
                    <ProductItem imageUrl={product.imageUrl} name={product.name} price={product.price} />
                </div>
            ))}
        </div>
        <div className="row">
            <Pager pageNum={products.length} root="products"/>
        </div>
    </section>

);

ProductList.propTypes = propTypes;

export default ProductList;
