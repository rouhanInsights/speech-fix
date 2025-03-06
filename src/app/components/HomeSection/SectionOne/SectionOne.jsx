import React from 'react'
import styles from './SectionOne.module.css'

const SectionOne = () => {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <img src='/images/img3.png' alt="speech" className={styles.image}/>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>Welcome to Our AI-Powered Speech Platform</h1>
            <p className={styles.text}>Our AI-Powered Speech Enhancement Platform is designed to transform spoken words into polished, professional-quality text. This application goes beyond basic speech-to-text by offering advanced text correction and enrichment, ensuring grammatical accuracy and improved readability while maintaining the original meaning and tone</p>
            <div className={styles.buttonContainer}>
            <button className={styles.button}>Get started</button>
            <button className={styles.button}>Try it Now</button>
            </div>
        </div>

    </div>
  )
}

export default SectionOne