import React from "react";
import styles from "../../../../styles/screens/MembershipCard.module.css";
const MembershipCard = ({ icon, title }) => {
  return (
    <div className={styles.membershipCard}>
      <img className="memberIcons" src={icon} />
      <p>{title}</p>
    </div>
  );
};

export default MembershipCard;
