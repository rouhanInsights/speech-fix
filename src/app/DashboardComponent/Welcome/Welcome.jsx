import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h2>Welcome back, User! 🎉</h2>
      <p>Start your speech improvement journey now.</p>
    </div>
  );
};

export default Welcome;
