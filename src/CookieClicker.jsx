import { useState } from "react";
import styles from "./CookieClicker.module.css";
export default function CookieClicker() {
  const [count, setCount] = useState(0);
  const scorePoeng = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className={styles.cookieContainer}>
      <h2>Click the cookie and score some points!</h2>
      <button className={styles.cookieBtn} onClick={scorePoeng}>
        <img
          src={`${import.meta.env.BASE_URL}cookie.png`}
          alt="Image of a Cookie"
        />
      </button>
      <p>Score poeng: {count}</p>
    </div>
  );
}
