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
        <title>Owen Rauckman | Tryna</title>
        <meta
          name="description"
          content="Hello, I'm Owen. I design UIs, build web apps, write backend services, and anything in between."
        />
        <link rel="icon" href="/favicon.ico" />
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
