import React from 'react';
import Styles from './product.module.css';
import products from '../products.json';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/slices/cartSlice'

const Product = () => {
  const dispatch=useDispatch();
  return (
    <div id={Styles.prod}>
      {products.map((props, i) => (
        <div  style={{ width: '17.2rem', margin: '10px',border:'1px solid #ccc' }} key={i}>
          <img className="card-img-top" src={props.image} alt={props.productName} />
          <div className="card-body">
            <h5 className="card-title">{props.productName}</h5>
            <p className="card-text">Rs. {props.price}/-</p>
            <button
              onClick={() =>
                dispatch(addItem({ name: props.productName, price: props.price }))
              }
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
