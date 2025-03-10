import React from "react";
import styles from "./Sidebar.module.css";
import { FaHome, FaMicrophone, FaFileAudio, FaChartBar, FaUser, FaCog } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      {/* ✅ Fix: Toggle Button should be always visible */}
      {/* <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"}
      </button> */}

      <ul className={styles.menu}>
        <li>
          <a href="/dashboard"><FaHome /> <span>Home</span></a>
        </li>
        <li>
          <label htmlFor={styles.label}>AI Tools</label>
          <a href="/dashboard/speech-fix"><FaMicrophone /> <span>Speech Fix</span></a>
        </li>
        <li>
          <a href="/dashboard/saved-audio"><FaFileAudio /> <span>Saved Audio</span></a>
        </li>
        <li>
        <label htmlFor={styles.label}>Personal</label>
          <a href="/dashboard/progress-tracking"><FaChartBar /> <span>Progress Tracking</span></a>
        </li>
        <li>
          <a href="/dashboard/profile"><FaUser /> <span>Profile</span></a>
        </li>
        <li>
        <label htmlFor={styles.label}>Resources</label>
          <a href="/dashboard/accounts"><FaUser /> <span>Accounts</span></a>
        </li><li>
          <a href="/dashboard/help"><FaUser /> <span>Help Center</span></a>
        </li>
        <li>
          <a href="/dashboard/settings"><FaCog /> <span>Settings</span></a>
        </li>
      </ul>
    </div>
  );
};


export default Sidebar;
