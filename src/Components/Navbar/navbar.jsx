import React, { useRef } from 'react';
import './navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu from '../../Assets/menu_open.svg';
import Menu_close from '../../Assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = React.useState("Home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right= "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right= "-350px";
  }

  return (
    <div className="navbar">
        <h1>Portfolio.</h1>
        <img src={Menu} alt='' onClick={openMenu} className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
            <img src={Menu_close} alt='' onClick={closeMenu} className="nav-mob-close" />
            <li><AnchorLink className='a-link' href='#Home'><p className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='a-link' offset={50} href='#About'><p className={menu === "About" ? "active" : ""} onClick={() => setMenu("About")}>About</p></AnchorLink></li>
            <li><AnchorLink className='a-link' offset={50} href='#Projects'><p className={menu === "Projects" ? "active" : ""} onClick={() => setMenu("Projects")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='a-link' offset={50} href='#Contact'><p className={menu === "Contact" ? "active" : ""} onClick={() => setMenu("Contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='a-link' offset={50} href='#Contact'>Contact Me</AnchorLink></div>
    </div>
  )
}

export default Navbar