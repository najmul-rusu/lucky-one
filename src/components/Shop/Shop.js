import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [] )

    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const chooseBtn = ()=>{
        const carts = cart[Math.floor(Math.random() * cart.length)];
    const randomProduct = [carts];
    setCart (randomProduct);
    }
    const deleteButton = ()=>{
    const deleteItem = [];
    setCart(deleteItem)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
              {
                  products.map(product=><Product
                      key = {product.id}
                      product = {product}
                      addToCart = {addToCart}
                      ></Product>)
              }
            </div>
            <div className='cart-container'>
                <h2>Selected Item</h2>
                {cart.map((item)=>
                <div className='cart-iterm'>
                <img src={item.img} alt="" />
                <p key={item.id}> &nbsp;{item.name}</p>
                </div>
                )}
                <button onClick={chooseBtn} className='choose-btn'><p>CHOOSE 1 FOR ME</p></button>
                <button onClick={deleteButton} className='delete-btn'><p>CHOOSE AGAIN</p></button>
            </div>
        </div>
    );
};

export default Shop;