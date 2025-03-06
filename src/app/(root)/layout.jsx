import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import NewsLetterSection from '../components/Newsletter/NewsLetter';
// import styles from './global.module.css'



export default function Layout({ children }) {
  return (
    <main className="font-work-sans">
        <div>
         <Navbar />
         <Hero/>
        </div>       
      {children}
      <NewsLetterSection/>
      <Footer/>
    </main>
  );
}