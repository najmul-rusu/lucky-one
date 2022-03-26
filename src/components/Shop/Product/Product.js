import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({addToCart, product}) => {
    const {name, price, img} = product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'><strong>{name}</strong></p>
                <p><strong>Price: {price} BDT</strong></p>
            </div>
            <button onClick={() => addToCart(product)} className='cart-btn'><p className='btn-text'>Add to cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;