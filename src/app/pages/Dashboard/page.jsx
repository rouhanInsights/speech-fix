"use client";
import React, { useState } from "react";
import Sidebar from "../../DashboardComponent/Sidebar/Sidebar";
import Navbar from "../../DashboardComponent/Navbar/Navbar";
import Welcome from "../../DashboardComponent/Welcome/Welcome";
import QuickLinks from "../../DashboardComponent/QuickLinks/QuickLinks";
import Stats from "../../DashboardComponent/Stats/Stats";
import Alerts from "../../DashboardComponent/Alerts/Alerts";
import styles from "../../Styles/Dashboard.module.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={styles.dashboard}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className={styles.mainContent}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Organized Dashboard Layout */}
        <Welcome />
        <div className={styles.contentGrid}>
          <QuickLinks />
          <Stats />
          <Alerts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
