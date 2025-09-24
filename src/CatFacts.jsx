import { useEffect, useState } from "react";
import styles from "./CatFacts.module.css";
export default function CatFacts() {
  const [facts, setFacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const index = Math.floor(Math.random() * 34);
        const response = await fetch(
          `https://catfact.ninja/facts?page=${index}`
        );
        if (!response.ok) {
          throw new Error(`Error. Status: ${response.status}`);
        }
        const result = await response.json();
        setFacts(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.catFactContainer}>
      {loading && <img src="./public/loading.png" alt="Loading" />}
      {error && <p className={styles.error}>Error: {error}</p>}
      {facts && (
        <div>
          <h2>10 random facts about cats</h2>
          {facts.data.map((fact, index) => {
            return (
              <p key={index}>
                {index + 1}. {fact.fact}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
