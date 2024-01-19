import React from 'react'
import "./style.css"
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import Button from '../Button';

function Header() {
  return (
    <div className='navbar'>
      <h1>CryptoTracker<span style={{ color: "var(--blue)" }}>.</span></h1>
      <div className="links">
        <a href='/'>
          <p className="link">Home</p>
        </a>
        <a href='/'>
          <p className="link">Compare</p>
        </a>
        <a href='/'>
          <p className="link">Wishlist</p>
        </a>
        <a href='#'>
          <Button text="Dashboard" onclick={() => console.log("clicked")} />
        </a>
      </div>
      
        <SwipeableTemporaryDrawer />
      
    </div>
  )
}

export default Header;