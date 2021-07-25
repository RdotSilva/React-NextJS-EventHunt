import Layout from "@/components/Layout";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import Image from "next/image";

export default function EventPage({ evt }) {
  const deleteEvent = (e) => {
    console.log("Delete Event");
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
      </div>
    </Layout>
  );
}

/**
 * Generate all of your static paths to pass into getStaticProps
 */
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events/`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

/**
 * Fetch data for a single event from API and populate the props for EventPage
 * This is done at build time
 */
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);

  const events = await res.json();

  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);

//   const events = await res.json();

//   return {
//     props: { evt: events[0] },
//   };
// }
