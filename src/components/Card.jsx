import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.cardFooter}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
