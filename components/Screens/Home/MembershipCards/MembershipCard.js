import React from "react";
import styles from "../../../../styles/Screens/Home/MembershipCard.module.css";

const MembershipCard = ({ icon, title, alt }) => {
  return (
    <div className={styles.membershipCard}>
      <img src={icon} alt={alt} />
      <span>{title}</span>
    </div>
  );
};

export default MembershipCard;
