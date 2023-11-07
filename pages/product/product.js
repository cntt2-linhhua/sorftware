import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { productDoc } from '../../document';

const Product = ({ item }) => {

  return (

    <div className="row align-items-center">
      <div className="col col-lg-5 col-12">
        <div className="shop-single-slider">
          <div className="slider-nav">
            <div>
              <Zoom>
                <img src={item.proImg ? item.proImg : ''} alt="products" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-7 col-12">
        <div className="product-details">
          <h2>{item.title}</h2>
          <div className="product-rt">
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <span>{`(25 ${productDoc.customerReview})`}</span>
          </div>
          <div className="price">
            <span className="current">${item.price}</span>
            <span className="old">${item.delPrice}</span>
          </div>
          <p>There are many variations of passages of Lorem Ipsum and available, but the majority have suffered alteration in somey form.</p>
          <ul>
            <li>Going through the cites of the word in classNameical.</li>
            <li>There are many variations of passages.</li>
            <li>Making it look like readable and spoken English.</li>
          </ul>
          <div className="tg-btm">
            <p><span>{productDoc.Categories}:</span> Book</p>
            <p><span>{productDoc.Tags}:</span> Kithen, Basement, Bathroom</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
