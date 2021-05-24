import React from 'react';
import MembershipCard from './MembershipCard';
import styles from '../../../../styles/Screens/Home/MembershipCards.module.css';

const MembershipCards = ({ data }) => {
  return (
    <div className={styles.memberContainer}>
      {data.map((data) => (
        <MembershipCard
          icon={data.icon_url}
          title={data.title}
          alt={data.alt}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default MembershipCards;