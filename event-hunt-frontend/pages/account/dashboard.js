import DashboardEvent from "@/components/DashboardEvent";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import styles from "@/styles//Dashboard.module.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Dashboard({ events, token }) {
  const router = useRouter();

  /**
   * Remove an event from the database and redirect user
   * @param {string} id ID of the event to delete
   */
  const deleteEvent = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log(data);

      if (!res.ok) {
        toast.error(data.message);
        return;
      } else {
        // TODO: Add toast to show removal of event
        router.reload();
      }
    }
  };

  return (
    <Layout title="User Dashboard">
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>
        {events.map((evt) => (
          <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
        ))}
      </div>
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
    props: {
      events,
      token,
    },
  };
}
