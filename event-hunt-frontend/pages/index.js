import Layout from "@/components/Layout";
import { API_URL } from "*/config/index";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

/**
 * Hit the Events API at build time and return the events data as props
 * Only runs once (for DEV env)
 */
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
