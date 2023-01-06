import React from 'react'
import './licensed.css';

import Product from '../../components/product/Product';
import funkoPop from '../../assets/img/funkoPop.png';

const Licensed = () => {

  const productsList = [
    {
      name: 'Funko Pop',
      imgUrl: funkoPop,
    },
    {
      name: 'Funko Pop',
      imgUrl: funkoPop,
      id: "item1"
    },
    {
      name: 'Funko Pop',
      imgUrl: funkoPop,
      id: "item2"
    },
    {
      name: 'Funko Pop',
      imgUrl: funkoPop,
      id: "item3"
    },
    {
      name: 'Funko Pop',
      imgUrl: funkoPop,
      id: "item4"
    },
    {
      name: 'Funko Pop',
      imgUrl: funkoPop,
      id: "item5"
    },
  ];

  return (
    <div className="licensed-section">

      <div className="licensed-title__container">
        <h1>Licensed Products</h1>
      </div>

      <div className="licensed-products-section">
        <div className="licensed-products__container">
          {
            productsList.map((product, index) => {
              return (
                <div key={index} className="licensed-products-product__container">
                  <Product imgUrl={product.imgUrl} name="" price=""/>
                </div>
              )
            })
          }
        </div>
        <div className="licensed-products__container">
          {
            productsList.map((product, index) => {
              return (
                <div key={index} className="licensed-products-product__container">
                  <Product imgUrl={product.imgUrl} name="" price=""/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Licensed