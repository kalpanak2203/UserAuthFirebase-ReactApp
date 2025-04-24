import React from 'react';
import './ProductGrid.css';
import Images from '../Assets/Images';

const products = [
  {
    background: Images.Image38,
    stars: 5,
    price: '$199.99'
  },
  {
    background: Images.Image40,
    stars: 4,
    price: '$199.99'
  },
  {
    background: Images.Image39,
    stars: 5,
    price: '$199.99'
  },
  {
    background: Images.Image46,
    stars: 5,
    price: '$199.99'
  }
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <div className="grid">
        {products.map((product, index) => (
          <div>
            <div className="product-card" key={index} style={{ backgroundImage: `url(${product.background})` }}>
            </div>
            <div className='BottomText'>Modern Wall Decor Framed Painting</div>
            <div className="bottom">
              <div className="price">{product.price}</div>

              <div className="stars">
                {'★'.repeat(product.stars)}{'☆'.repeat(5 - product.stars)}
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
