import styles from "./dfilter.module.css";
import useDebounce from "../../utils/useDebounce";
import { useEffect, useState } from "react";

const Filter = ({
  delayValue,
  changeSearchFilter,
  activeFilter,
  setActiveFilter,
  setActive,
}) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, delayValue);

  useEffect(() => {
    changeSearchFilter(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className={styles.filter}>
      <div className={styles.buttonwrap}>
        <button
          className={
            activeFilter === "ALL" ? styles.buttonactive : styles.button
          }
          type="button"
          onClick={() => {
            setActiveFilter("ALL");
            setActive(1);
          }}
        >
          All
        </button>
        <button
          className={
            activeFilter === "CF" ? styles.buttonactive : styles.button
          }
          type="button"
          onClick={() => {
            setActiveFilter("CF");
            setActive(1);
          }}
        >
          CF
        </button>
        <button
          className={
            activeFilter === "ICPC" ? styles.buttonactive : styles.button
          }
          type="button"
          onClick={() => {
            setActiveFilter("ICPC");
            setActive(1);
          }}
        >
          ICPC
        </button>
        <button
          className={
            activeFilter === "IOI" ? styles.buttonactive : styles.button
          }
          type="button"
          onClick={() => {
            setActiveFilter("IOI");
            setActive(1);
          }}
        >
          IOI
        </button>
        <button
          className={
            activeFilter === "FAVORITE" ? styles.buttonactive : styles.button
          }
          type="button"
          onClick={() => {
            setActiveFilter("FAVORITE");
            setActive(1);
          }}
        >
          Favourites
        </button>
      </div>
      <div>
        <input
          className={styles.input1}
          placeholder="Start typing to search..."
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};

export default Filter;
