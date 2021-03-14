import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./route.module.css";
const Route = () => {
  const router = useRouter();
  const x = Number(router.query.contest_id);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://codeforces.com/api/contest.list")
      .then((response) => response.json())
      .then((y) =>
        y.result.some((e) => {
          if (e.id === x) {
            setData(e);
            return true;
          }
          return false;
        })
      );
  }, []);

  console.log(data);

  return (
    <div className={styles.route}>
      {data && (
        <>
          <p>
            <span className={styles.head}>ID--{`>`}</span>
            {data.id}
          </p>
          <p>
            <span className={styles.head}>NAME--{`>`}</span>
            {data.name}
          </p>
          <p>
            <span className={styles.head}>TYPE--{`>`}</span>
            {data.type}
          </p>
          <p>
            <span className={styles.head}>PHASE--{`>`}</span>
            {data.phase}
          </p>
          <p>
            <span className={styles.head}>DURATION SECONDS--{`>`}</span>
            {data.durationSeconds}
          </p>
        </>
      )}
    </div>
  );
};

export default Route;
