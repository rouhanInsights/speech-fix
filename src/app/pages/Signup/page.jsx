"use client";
import React, { useState } from "react";
import styles from "../../Styles/SignUp.module.css"; 
import { useRouter } from "next/navigation"; // Import useRouter

const Signup = () => {
  const router = useRouter(); // Initialize router at the top

  const [formData, setFormData] = useState({
    name: "",
    mobile_no: "",
    dob: "",
    email: "",
    alternate_email: "",
    school_college: "",
    degree: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1>Welcome to <span className={styles.brand}>SpeechFix</span></h1>
        <p>Enhance your speech with AI-powered tools.</p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.formContainer}>
          <h2>Create a personal account</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" name="name" onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
              <label>Mobile Number</label>
              <input type="number" name="mobile_no" onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
              <label>Date of Birth</label>
              <input type="date" name="dob" onChange={handleChange} />
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
              <label>Alternate Email</label>
              <input type="email" name="alternate_email" onChange={handleChange} />
            </div>

            <div className={styles.formGroup}>
              <label>School / College</label>
              <input type="text" name="school_college" onChange={handleChange} />
            </div>

            <div className={styles.formGroup}>
              <label>Degree</label>
              <input type="text" name="degree" onChange={handleChange} />
            </div>

            <div className={styles.formGroup}>
              <label>Password</label>
              <input type="password" name="password" onChange={handleChange} required />
            </div>

            <button type="submit" className={styles.submitButton}>Sign Up</button>
            <p className={styles.backhome}>Back to <a href="/">Home Page</a></p>

            {/* Fix: Initialize `router` and use router.push() correctly */}
            <p className={styles.loginText}>
              Already have an account? <a onClick={() => router.push("/?login=true")}>Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
