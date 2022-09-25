import React from 'react';
import logo from '../../images/Logo.svg';
import('./Nav.css')
const Nav = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
            <ul>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </ul>
        </nav>
    );
};

export default Nav;