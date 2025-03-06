import React from 'react';
import styles from './Hero.module.css';


const Hero = () => {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.rightcontent}>
      <h2 className={styles.subheading1}>
          <span className={styles.highlight}>Our AI-Powered Speech Enhancement Platform</span>
        </h2>
        <h1 className={styles.subheading2}>
          Transform <span className={styles.gradientText}>Spoken Words</span> into 
          <span className={styles.gradientText}> Polished, Professional-Quality Text</span>
        </h1>
        <p className={styles.description}>
          This application goes beyond basic speech-to-text by offering advanced text correction and enrichment.
        </p>
        <button className={styles.button}>Download the App Now</button>
      </div>
      <div className={styles.leftcontent}>
        <img src="/images/hero1.png" alt="img" />
      </div>
    </section>
    </>
  );
};


export default Hero;
