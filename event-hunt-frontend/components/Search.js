import styles from "@/styles/Search.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState("");

  const router = useRouter();

  /**
   * Route the user to th search page and reset state
   * @param {object} e The input event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Events"
        ></input>
        <button className="btn-secondary" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}
