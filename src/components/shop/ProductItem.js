import React, { PropTypes } from 'react';

const propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
};

const ProductItem = ({ name, imageUrl, price}) => {
    return (
        <div className="shop-item">
            <div className="shop-item-image">
                <img src={imageUrl} alt="" />
                <div className="shop-item-detail">
                    <a className="btn btn-round btn-b"><span className="icon-basket"></span> Add To Cart</a>
                </div>
            </div>
            <h4 className="shop-item-title font-alt">
                <a href="#">{name}</a>
            </h4>
            <div>{price} zł</div>
        </div>
    );
};


ProductItem.propTypes = propTypes;

export default ProductItem;
