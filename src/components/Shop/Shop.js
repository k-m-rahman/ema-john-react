import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
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
        const newCart = [...cart,product];
        setCart(newCart) ;
        console.log(newCart)
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

            <div className="order-history">
                <Cart cart={cart}></Cart>
        
            </div>
        </div>
    );
};

export default Shop;