import React, { useState } from 'react';
import styles from './Header.module.scss';
import './../styles/index.scss';
import logo from '../assets/logo.png';

import { BiMenuAltRight} from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen]  = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);
  
  return (
  <div className={styles.header}>
    <div className={styles.header__content}>
      <div>
      <img src={logo} alt='Logo'/>
        <span className={styles.logo}>Play Piano</span>
      </div>
<div>
  <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`]: {}}`}>
    <a className={styles.nav__item} href={"/"}>Piano Songs</a>
    <a className={styles.nav__item} href={"/"}>Learn Piano</a>
    <a className={styles.nav__item} href={"/"}>Games</a>
<div className={styles.nav__button__container}>
<Button />
</div>

  </nav>
</div>
<div>
      <div className={styles.header__button__container}>
        <Button />
      </div>
      <button className={styles.header__toggler} onClick={menuToggler}>
       {!menuOpen? <BiMenuAltRight/> : <AiOutlineCloseSquare/>}
      </button>
  </div>
  </div>
</div>
     ); 
};

const Button = () => {
  return <button className={styles.button}>Register/Login</button>
}

export default Header;
