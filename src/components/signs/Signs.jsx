import React from 'react'
import './signs.css';

import { signs1, signs2, signs3, signs4, signs5 } from './imports';

const Signs = () => {

    const signs = [signs1, signs2, signs3, signs4, signs5];
  return (
    <div className="witcher__signs">
        { signs.map((sign, index) => {
            return (
                <div key={index}>
                    <img src={sign} alt={sign} />
                </div>
            )
        })}
    </div>
  )
}

export default Signs