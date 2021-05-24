import React from "react"
import Button from "../components/Utilities/Button";
import FeatureCards from "../components/Utilities/FeatureCards";
import { WebProvider } from '../contexts/WebConext'
import Layout from './../components/Layout/Layout';
import featureCardData from '../data/Home/features.json'

export default function Home() {

  return (
    <WebProvider>
      <Layout>
        <div className="section">

        </div>
        <FeatureCards title="Why Be A Part Of It?" data={featureCardData} />
      </Layout>
    </WebProvider>
  )
}