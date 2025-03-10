import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={styles.navbar}>
      <button className={styles.menuButton} onClick={toggleSidebar}>☰</button>
      <h1>SpeechFix Dashboard</h1>
      
      <div className={styles.navRight}>
        <div className={styles.userProfile}>
          <img src="/images/user-avatar.png" alt="User Avatar" />
          <span>Hello, User</span>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
