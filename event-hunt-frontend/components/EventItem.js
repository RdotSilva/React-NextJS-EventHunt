import styles from "@/styles/EventItem.module.css";
import Image from "next/image";
import Link from "next/link";

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </div>
    </div>
  );
}
