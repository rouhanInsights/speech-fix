import React from "react";
import styles from "./QuickLinks.module.css";

const QuickLinks = () => {
  return (
    <div className={styles.quickLinks}>
      <h3>Quick Access</h3>
      <div className={styles.links}>
        <a href="/dashboard/speech-fix">🎤 Start a New Session</a>
        <a href="/dashboard/saved-audio">📂 View Saved Audios</a>
        <a href="/dashboard/progress-tracking">📈 Track Your Progress</a>
      </div>
    </div>
  );
};

export default QuickLinks;
