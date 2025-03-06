"use client";

import React from 'react'
import styles from './Navbar.module.css'
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className={styles.head}>
      <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <img src="/Images/Logoitem.png" alt="logo" className={styles.logoImage} />
      </div>

      <div className={styles.navLinks}>
        <a onClick={() => router.push("/")}>Home</a>
        <a onClick={() => router.push("/pages/features")}>Features</a>
        <a onClick={() => router.push("/pages/pricing")}>Pricing</a>
        <a onClick={() => router.push("/pages/about")}>About</a>
        <a onClick={() => router.push("/pages/contact")}>Contact</a>
        <a onClick={() => router.push("/pages/help")}>Help</a>
        <button className={styles.loginButton} onClick={() => router.push("/pages/login")}>Log In</button>
      </div>
    </nav>
    </header>
  )
}


export default Navbar