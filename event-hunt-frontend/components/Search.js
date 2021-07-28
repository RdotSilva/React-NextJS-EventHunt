import styles from "@/styles/Search.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState("");

  const router = useRouter();

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Events"
        ></input>
      </form>
    </div>
  );
}
