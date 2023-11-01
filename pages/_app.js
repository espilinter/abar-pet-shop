import PageContainer from '@/layout/pageContainer/pageContainer.layout'
import '../styles/globals.css'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import CatSpinner from '@/components/CatSpinner/CatSpinner';
function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true)
    });
    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false)
    });
  }, [Router])
  return (
    <>
      {isLoading && <CatSpinner />}
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </>
  )
}

export default MyApp
