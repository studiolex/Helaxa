import Head from "next/head";

import Slitting from "../components/slitting.js";
import Waterjet from "../components/waterjet.js";
import Stockholder from "../components/stockholder.js";
import Contact from "../components/contact.js";
import Header from "../components/header.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Helaxa | Slitting, Waterjet and stockholder</title>
        <meta
          name="description"
          content="Your Stainless Steel Service Center"
        />
        <meta
          property="og:title"
          content="Helaxa | Slitting, Waterjet and stockholder"
          key="title"
        />
        <meta
          property="og:title"
          content="Helaxa | Slitting, Waterjet and stockholder"
          key="title"
        />
      </Head>

      <main className="">
        <Header />
        <Slitting />
        <Waterjet />
        <Stockholder />
        <Contact />
      </main>
    </div>
  );
}
