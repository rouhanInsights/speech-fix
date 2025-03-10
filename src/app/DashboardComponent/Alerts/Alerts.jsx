import React from "react";
import styles from "./Alerts.module.css";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const Alerts = () => {
  const alerts = [
    { type: "success", message: "✅ Your last session was saved successfully!" },
    { type: "warning", message: "⚠️ Your premium subscription expires in 3 days." },
  ];

  return (
    <div className={styles.alerts}>
      <h3>Notifications</h3>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index} className={alert.type === "success" ? styles.alertSuccess : styles.alertWarning}>
            {alert.type === "success" ? <FaCheckCircle className={styles.alertIcon} /> : <FaExclamationTriangle className={styles.alertIcon} />}
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
