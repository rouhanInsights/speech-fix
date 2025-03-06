import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.part1}>
          <div className={styles.logo}>
            <img src='/images/logo.png' alt="Logo" />
          </div>
          <div className={styles.items}>
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Blog and Updates</a></li>
            </ul>
          </div>
          <div className={styles.media}>
            <ul>
              <li><a href="/"><FaLinkedin /></a></li>
              <li><a href="/"><FaYoutube /></a></li>
              <li><a href="/"><FaTwitter /></a></li>
              <li><a href="/"><FaInstagram /></a></li>
              <li><a href="/"><FaFacebook /></a></li>
            </ul>
          </div>
        </div>
        <div className={styles.part2}>
          <ul>
            <li>© 2024 eshop. All rights reserved.</li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Cookies Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;