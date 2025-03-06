"use client"

import React from 'react'
import styles from './SectionTwo.module.css';
import Button from '../../Button/Button';
import Card from '../../Card/Card';

const features = [
    {
      number: "01",
      logo: "/images/logo4.png",
      title: "Audio Recording",
      description: "Record high-quality audio with AI-powered enhancement.",
    },
    {
      number: "02",
      logo: "/images/logo2.png",
      title: "Raw Transcription",
      description: "Convert speech into text with real-time accuracy.",
    },
    {
      number: "03",
      logo: "/images/logo1.png",
      title: "Enhaced Transcription",
      description: "Automatically fix grammar and punctuation errors.",
    },
    {
      number: "04",
      logo: "/images/logo3.png",
      title: "Text to Speech",
      description: "Transform text into natural-sounding speech.",
    },
  ];

  
const SectionTwo = () => {
  return (
    <div className={styles.main}>
        <div className={styles.heading}>
            <h1 className={styles.title}>Welcome to Our <span>AI-Powered Spe</span>ech Platform</h1>
        </div>
        <div className={styles.content}>
            <div className={styles.imagecontainer}>
                <img src="/images/image2.png" alt="img" />
            </div>
            <div className={styles.rightbox}>
                <div className={styles.topcontent}>
                    <p className={styles.text}>Our AI-Powered Speech Enhancement Platform is designed to transform spoken words into polished, professional-quality text. This application goes beyond basic speech-to-text by offering advanced text correction and enrichment, ensuring grammatical accuracy and improved readability while maintaining the original meaning and tone</p>
                    <div className={styles.buttonContainer}>
                        <Button/>
                    </div>
                </div>
                <div className={styles.bottomcontent}>
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        number={feature.number}
                        logo={feature.logo}
                        title={feature.title}
                        description={feature.description}
                    />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo