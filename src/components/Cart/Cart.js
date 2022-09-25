import React from 'react';
import ('./Cart.css')

const Cart = ({cart}) => {
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <div className='cart'>
                <p>Selected Products: {cart.length}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: ${}</p>

            </div>
        </div>
        
    );
};

export default Cart;