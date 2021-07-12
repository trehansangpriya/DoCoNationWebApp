import { useEffect, useState } from 'react';
import Router from "next/router"
import '../styles/globals.css'
//Global Context
import { WebProvider } from './../contexts/WebConext';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("loading");
      setLoading(true);
    };
    const end = () => {
      console.log("loaded");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    }
  }, [])
  return (
    <WebProvider >
      <Layout>
        {
          (!loading)
            ?
            (
              <Component {...pageProps} />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '80vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <img src="/loader.svg" alt="Loader" width="80px" />
              </div>
            )
        }
      </Layout>
    </WebProvider>
  )
}

export default MyApp
