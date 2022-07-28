import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {Cart} from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      
            <div className="col col-auto order-2 order-lg-1">
                <ul className="nav">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                
                  <li>
                    <Link href="/login">
                        Login
                     </Link>   
                  </li>
                </ul>
            </div>
            
            <div className="col-12 col-lg text-center col-auto order-1 order-lg-2">
                <h1 className="navbar-brand logo" to="/">Ecommerce</h1>
            </div>

            <div className="col col-auto order-3 order-lg-3">
                <ul className="nav">
                  <li>
                    <Link href="/contact">
                        contact
                     </Link>   
                  </li>
                  <li>
                    <Link href="/cart">
                        Cart
                     </Link>   
                  
                    <button type="button" 
                            className="cart-icon" onClick={() => setShowCart(true)}>
                        <AiOutlineShopping />
                        <span className="cart-item-qty">{totalQuantities}</span>
                    </button>

                    {showCart && <Cart />}
                  </li>
                    
                </ul>
            </div>
      

      
    </div>
  )
}

export default Navbar


        
