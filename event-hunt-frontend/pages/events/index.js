import EventItem from "@/components/EventItem";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";
import { API_URL, RESULTS_PER_PAGE } from "@/config/index";

export default function EventsPage({ events, page, total }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination total={total} page={page} />
    </Layout>
  );
}

/**
 * Hit the Events API and return the events data as props
 */
export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * RESULTS_PER_PAGE;

  // Fetch total/count of events
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // Fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${RESULTS_PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();

  return {
    props: {
      events,
      page: +page,
      total,
    },
  };
}
