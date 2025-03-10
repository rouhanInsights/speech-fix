import React from "react";
import styles from "./Stats.module.css";
import { FaMicrophone, FaFileAlt, FaCheckCircle, FaClock } from "react-icons/fa";

const Stats = () => {
  return (
    <div className={styles.stats}>
      <h3>Your Progress</h3>
      <ul>
        <li><FaMicrophone /> Total Recordings: 15</li>
        <li><FaFileAlt /> Transcriptions Done: 10</li>
        <li><FaCheckCircle /> Errors Fixed: 7</li>
        <li><FaClock /> Time Practiced: 120 mins</li>
      </ul>
    </div>
  );
};

export default Stats;
