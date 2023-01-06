import React from 'react';
import './products.css';
import Product from '../../components/product/Product';

import cdprLogo from '../../assets/img/cdpr-logo.png';
import geralt from '../../assets/img/geraltAF.png';
import wildHunt from '../../assets/img/wildhuntAF.png'
import funkoPop from '../../assets/img/funkoPop.png'

const Products = () => {
    const products = [
        {
            name: "Geralt of Rivia",
            price: "PHP 3500",
            imgUrl: geralt
        },
        {
            name: "Funko Pop - Geralt",
            price: "PHP 2500",
            imgUrl: funkoPop
        },
    ]

  return (
    <div className="products-highlight-section" id="products">

        <div className="products-highlight__logo">
            <img src={cdprLogo} alt="logo"/>
        </div>

        <div className="products-highlight__container">
            <div className="products-highlight__container-main">
                <Product imgUrl={wildHunt} name="Wild Hunt" price="PHP 10000"/>
            </div>
            <div className="products-highlight__container-side">
                {
                    products.map((product, index) => {
                        return (
                            <div key={index}  className="products-highlight__container-side_content">
                                <Product imgUrl={product.imgUrl} name={product.name} price={product.price} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="products-highlight__button">
            <a href="https://google.com"><button>See all Witcher merch</button></a>
        </div>
    </div>
  )
}

export default Products;