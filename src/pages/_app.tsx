import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ERT</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )

}
