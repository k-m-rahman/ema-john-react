import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ('./Product.css')

const Product = (props) => {
    // console.log(props.product)
    const {addToCart,product} = props ;
    const {img,name,price,ratings,seller} = product ;
    return (
        <div className='product'>
            <div style={{textAlign:'center'}}>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <div  style={{height:'130px'}}>
                    <p className='product-name'>{name}</p>
                    <p>Price: ${price}</p>
                </div>
                <div style={{marginBottom:'30px'}}>
                    <p style={{marginBottom:'0'}}>Manufacturer: {seller}</p>
                    <p style={{marginTop:'10px'}}>Ratings: {ratings}</p>
                </div>
            </div>
            <button onClick={()=> addToCart(product)} className='btn-cart'>
                <span style={{marginRight:'10px'}}>Add To Cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;