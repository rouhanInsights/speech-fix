import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Loginmodal.module.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Hide modal when not open
const router = useRouter();; // Hide modal when not open
  
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <h2 className={styles.heading}>Login to Your Account</h2>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <div className={styles.inputContainer}>
            <FaUser className={styles.icon} />
            <input type="email" placeholder="Email" className={styles.input} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <div className={styles.inputContainer}>
            <FaLock className={styles.icon} />
            <input type="password" placeholder="Password" className={styles.input} />
          </div>
        </div>
        
        <p className={styles.pageLink}>
          <span className={styles.pageLinkLabel}>Forgot Password?</span>
        </p>
        <button className={styles.button}>Login</button>

        <p className={styles.signupText}>
          Don't have an account? <a onClick={() => router.push("/pages/Signup")}>Sign Up</a>
        </p>
      </div>
    </div>
    // <div className={styles.overlay}>
    //   <div className={styles.modal}>
    //     <button className={styles.closeButton} onClick={onClose}>✖</button>
    //     <h2 className={styles.heading}>Login to Your Account</h2>

    //     <div className={styles.formGroup}>
    //       <label className={styles.label}>Email</label>
    //       <input type="email" placeholder="Email" className={styles.input} />
    //     </div>

    //     <div className={styles.formGroup}>
    //       <label className={styles.label}>Password</label>
    //       <input type="password" placeholder="Password" className={styles.input} />
    //     </div>

    //     <button className={styles.button}>Login</button>
    //   </div>
    // </div>
  );
};


export default LoginModal;
