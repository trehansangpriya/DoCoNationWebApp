import React from "react";
import MembershipCards from "../components/Screens/Home/MembershipCards";
import Button from "../components/Utilities/Button";
import { WebProvider } from "../contexts/WebConext";
import Layout from "./../components/Layout/Layout";
import becomeMemberData from "../data/home/membershipData.json";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <WebProvider>
      <Layout>
        <div className="section">
          <div className={styles.becomeMember}>
            <h2 style={{ textAlign: "center" }}>Why Become a Member?</h2>
            <MembershipCards data={becomeMemberData} />
          </div>
        </div>
      </Layout>
    </WebProvider>
  );
}
