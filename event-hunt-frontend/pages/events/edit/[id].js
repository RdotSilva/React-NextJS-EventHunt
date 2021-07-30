import Layout from "@/components/Layout";
import styles from "@/styles/Form.module.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { API_URL } from "@/config/index";

export default function EditEventPage() {
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const router = useRouter();

  /**
   * Update state when input fields are edited
   * @param {object} e The event object
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Layout title="Add New Event">
      <Link href="events">Go Back</Link>
      <h1>Edit Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}></div>
        <div>
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor="performers">Performers</label>
          <input
            type="text"
            name="performers"
            id="performers"
            value={values.performers}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            name="venue"
            id="venue"
            value={values.venue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={values.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={values.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            value={values.time}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description">Event Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type="submit" value="Update Event" className="btn" />
      </form>
    </Layout>
  );
}
