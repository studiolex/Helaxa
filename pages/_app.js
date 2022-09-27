// import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/swiper.css";
import Layout from "../components/layout";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script> */}
      <Component {...pageProps} />
    </Layout>
  );
}
