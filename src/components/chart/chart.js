import { useRef, useEffect } from "react";
import Chart from "chart.js";
import styles from "./chart.module.css";

const MyChart = ({ data, options, type }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type,
      data,
      options,
    });
    chart.update();
    return () => {
      chart.destroy();
    };
  }, [data, options, type]);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas_line_chart}/>
    </div>
  );
};

export default MyChart;
