import React from "react";
import MembershipCards from "../components/Screens/Home/MembershipCards";
import Button from "../components/Utilities/Button";
import { WebProvider } from "../contexts/WebConext";
import Layout from "./../components/Layout/Layout";
import becomeMemberData from "../data/home/membershipData.json";
import styles from "../styles/pages/home.module.css";
import HeroSection from "../components/Utilities/HeroSection";
import heroSectionData from '../data/Home/heroSection.json'


export default function Home() {
  return (
    <WebProvider>
      <Layout>
        <HeroSection
          content={heroSectionData.content}
          title={heroSectionData.title}
          img={heroSectionData.img}
          link={heroSectionData.link} />
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
