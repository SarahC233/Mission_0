import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import loggedInImage from "../images/logged-in.png";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={loggedInImage} alt="Logged In" className={styles.logoImage} />
        <h1>News Home Page</h1>
      </div>
      <nav className={showNav ? styles.navActive : styles.nav}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#merch">Breaking</a>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
      <div className={styles.menuIcon} onClick={() => setShowNav(!showNav)}>
        {showNav ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;
