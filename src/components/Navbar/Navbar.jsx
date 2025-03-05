"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        SpeechFix
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <a onClick={() => router.push("/about")}>About</a>
        <a onClick={() => router.push("/features")}>Features</a>
        <a onClick={() => router.push("/contact")}>Contact</a>
      </div>

      <div className={styles.menuicon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
