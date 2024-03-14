import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [navActive, setNavActive] = useState(false)

  const toggleNav = () => {
    setNavActive(!navActive)
  }

  const closeMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu()
    }
  }, [])

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <a href="https://upaychat.com/" className='upay-link'><img src="./img/logo.png" alt="Upaychat" /> UpayChat</a> 
      </div>
      <a className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}> 
        <span className='nav_hamburger_line'></span>
        <span className='nav_hamburger_line'></span>
        <span className='nav_hamburger_line'></span>
      </a>

      <div className={`navbar-items  ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
             onClick={closeMenu} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/"
              className='navbar-content'
            >
              Application Status
            </Link>
          </li>

          <li>
            <Link
             onClick={closeMenu} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/"
              className='navbar-content'
            >
              Cardholder Login
            </Link>
          </li>

          <li>
            <Link
             onClick={closeMenu} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/"
              className='navbar-content'
            >
              Card Catalog
            </Link>
          </li>
        </ul>
      </div>
        <Link
            onClick={closeMenu} 
            activeClass="navbar-active-content" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="/"
            className='btn btn-outline-primary'
          >
            Learn More
        </Link>
    </nav>
  )
}

