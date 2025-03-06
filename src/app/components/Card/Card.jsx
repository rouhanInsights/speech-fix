import React from "react";

const Card = ({ number, logo, title, description }) => {
  return (
    <div style={styles.card}>
      <div style={styles.circle}>
        <p style={styles.circleText}>{number}</p>
      </div>
      <div style={styles.icon}>
        <img src={logo} alt={title} style={styles.logo} />
      </div>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "100px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.09)",
    padding: "36px",
    borderRadius: "12px",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0px 0px 15px rgb(156, 161, 189)",
  },
  circle: {
    width: "60px",
    height: "60px",
    backgroundColor: "#7D3CFF",
    borderRadius: "50%",
    position: "absolute",
    right: "-10px",
    top: "-10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
  },
  icon: {
    width: "50px",
    height: "50px",
    margin: "10px auto",
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  title: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "10px",
    color: "#666",
    lineHeight: "1.6",
  },
};

export default Card;
