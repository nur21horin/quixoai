import React from 'react'

const Navbar = () => {
    
  return (
    <div className='navbar'>
      <nav className='inner'>
        <div className='left'>
            <div className='logo'>
                <span className='name'>
                    Quixoai
                </span>
            </div>
            <ul className='links'>
                <a href='#'>Product</a>
                <a href='#'>Pricing</a>
                <a href='#'>Community</a>
                <a href='#' className='btn'>EnterPrise</a>
            </ul>
        </div>
        <div className='actions'>
            <button onClick={handleAuthClick}
            className='login'>
                Log In
            </button>
            <a href="#upload" className='cta'>Get Started</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
