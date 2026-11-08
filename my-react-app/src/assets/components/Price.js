import React from 'react';
import product from '../product';

function Price() {
  return <p style={{ fontSize: '1.5rem', color: 'green' }}>${product.price}</p>;
}

export default Price;