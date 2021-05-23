import React from "react"
import Button from "../components/Utilities/Button";
import { WebProvider } from '../contexts/WebConext'
import Layout from './../components/Layout/Layout';

export default function Home() {

  return (
    <WebProvider>
      <Layout>
        <div className="section">

        </div>
      </Layout>
    </WebProvider>
  )
}