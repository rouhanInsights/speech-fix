import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import NewsLetterSection from '../components/Newsletter/NewsLetter';
// import styles from './global.module.css'
import Features from '../components/Features/Features';
import Pricing from '../components/Pricing/Pricing';

export default function Layout({ children }) {
  return (
    <main className="font-work-sans">
        <div>
         <Navbar />
         <Hero/>
        </div>       
      {children}
      <section id="features" style={styles.section}>
        <Features/>
      </section>

      <section id="pricing" style={styles.section}>
        <Pricing/>
      </section>
      <NewsLetterSection/>
      <Footer/>
    </main>
  );
}

const styles = {
  section: {
    height: "auto",  // Adjust height as needed
    textAlign: "center",
    padding: "100px",
    background: "#f5f5f5",
    marginBottom: "20px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#333",
    color: "#fff",
  },
};