import React from 'react'
import './product.css';

const Product = ({ imgUrl, name, price }) => {
  return (
    <div className="product-container">
      <div className="product-img-container">
      <a href="http://google.com"><img src={imgUrl} alt={imgUrl}/></a>
      </div>
      <div className="product-details-container">
        <a href="https://google.com">{name}</a>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Product