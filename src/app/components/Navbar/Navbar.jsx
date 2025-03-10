"use client";

import React, { useState } from "react";
import styles from './Navbar.module.css'
import { useRouter } from "next/navigation";
import LoginModal from '../Loginmodal/LoginModal';


const Navbar = () => {
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={styles.head}>
      <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <img src="/Images/Logoitem.png" alt="logo" className={styles.logoImage} />
      </div>

      <div className={styles.navLinks}>
        <a onClick={() => router.push("/")}>Home</a>
        <a onClick={() => scrollToSection("features")}>Features</a>
        <a onClick={() => scrollToSection("pricing")}>Pricing</a>
        <a onClick={() => router.push("/pages/about")}>About</a>
        <a onClick={() => router.push("/pages/contact")}>Contact</a>
        <a onClick={() => router.push("/pages/help")}>Help</a>
        <button className={styles.loginButton} onClick={() => setIsLoginOpen(true)}>Login</button>
      </div>
    </nav>
    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  )
}


export default Navbar