// import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/swiper.css";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
