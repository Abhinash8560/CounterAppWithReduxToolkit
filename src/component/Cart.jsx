import React from 'react'
import Styles from './Home.module.css'
import {useSelector} from 'react-redux';

const Cart = () => {
  const items=useSelector((state)=>state);
  const total=items.cart.reduce((a,b) =>a+b.price,0)
  console.log("Abhi",items);
  return (
    <div className={Styles.alert}>
  <h3>Total Items:{items.cart.length} ----  Total Price:{total}/-</h3>
    
    </div>
  )
}

export default Cart