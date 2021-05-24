import React from "react";
import MembershipCard from "./MembershipCard";
import styles from "../../../../styles/screens/home.module.css";

const MembershipCards = ({ data }) => {
  return (
    <div className={styles.memberContainer}>
      {data.map((data) => (
        <MembershipCard icon={data.icon_url} title={data.title} />
      ))}
    </div>
  );
};

export default MembershipCards;
