import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";
/**
 * Used to create a custom Head for each page
 *
 * @param {string} title The title
 * @param {string} keywords The keywords
 * @param {string} description The description
 * @param {object} children The children to render
 */
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Event Hunt | Find your next event now",
  description: "Find the hottest local events",
  keywords: "events, meetup, local, group, ",
};
