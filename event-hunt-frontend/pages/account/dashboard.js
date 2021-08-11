import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";

export default function Dashboard({ events }) {
  console.log(events);
  return (
    <Layout title="User Dashboard">
      <h1>Dashboard</h1>
    </Layout>
  );
}

/**
 * Get the users token using the parseCookies util
 * Fetch user events and populate props with events
 */
export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: { events },
  };
}
