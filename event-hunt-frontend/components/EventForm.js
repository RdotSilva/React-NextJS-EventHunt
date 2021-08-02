import styles from "@/styles/Form.module.css";
import moment from "moment";

export default function EventForm({ values, handleInputChange }) {
  return (
    <>
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
          value={moment(values.date).format("yyyy-MM-DD")}
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
    </>
  );
}
