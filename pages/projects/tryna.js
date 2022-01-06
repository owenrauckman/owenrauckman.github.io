import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Project.module.scss";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import NextSection from "../../components/NextSection/NextSection";

import { trynaData } from "../../data";

export default function Tryna() {
  return (
    <div className={styles.hello}>
      <Head>
        <title>Tryna | Owen Rauckman</title>
        <meta name="description" content="An exploration of my work on Tryna" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-meta.jpg" key="ogimage" />
      </Head>
      <main>
        <PageTemplate data={trynaData} />
      </main>
      <NextSection data={trynaData} />
    </div>
  );
}

/* Pass props to the main app.js, useful for conditional elements in our header */
export async function getStaticProps() {
  return {
    props: {
      showHireButton: false
    }
  };
}
