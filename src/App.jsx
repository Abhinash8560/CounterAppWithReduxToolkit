import { useState } from 'react'
import './App.css'
import Cart from './component/Cart'
import products from './products.json'
import Product from './component/Product'

function App() {

  return (
    <>
    <div className='App'>
    <Cart />

    <div className='products'>

        <Product  />
   

    </div>
    </div>
    </>
  )
}

export default App
