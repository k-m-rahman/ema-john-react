import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import ('./Shop.css')

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToCart = product =>{
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart) ;
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product => <Product product={product} 
                key={product.id}
                addToCart={addToCart}    
                >
                </Product>)}
            </div>

            <div className="order-summary">
                <h2>Order Summary</h2>
                <p>Num of Products added: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;