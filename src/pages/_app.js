import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SMB Loans - Fast & Flexible Funding for Your Business</title>
        <meta name="description" content="Get the funding your small business needs with SMB Loans. Quick approvals, competitive rates, and personalized service for entrepreneurs." />
        <meta name="keywords" content="SMB loans, small business funding, business financing, quick loans, competitive rates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </>
  );
}