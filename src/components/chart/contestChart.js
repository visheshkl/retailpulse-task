import Chart from './chart';
import styles from '../../components/dfilter/dfilter.module.css';
import { useState } from 'react';
import useMediaQuery from '../../utils/useMediaQuery';

const buildOptions = (title, scale,display) => {
  const bodyCSS = parseFloat(
    getComputedStyle(document.querySelector("body"))["font-size"]
  );
  return {
    scales: scale
      ? {
          yAxes: [
            {
              ticks: {
                fontSize: bodyCSS * 0.8,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display,
                fontSize: bodyCSS * 0.8,
              },
            },
          ],
        }
      : null,
    title: {
      display: true,
      text: title,
      fontSize: bodyCSS,
    },
    legend: { display: true, labels: { fontSize: bodyCSS * 0.8 } },
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 600,
    },
  };
};

const ContestChart=({cfdata})=>{
    const [activeFilter,setActiveFilter]=useState("ALL");
    const isMobile=useMediaQuery("(max-width:800px)");
    const dataFilter=(o)=>{
        if(activeFilter==="ALL")
        return true;
        return o.phase===activeFilter;
    }
    const generateBlockedArray=()=>{
        return cfdata.filter(dataFilter).map(o=>o.name);
    }
    return(
        <div className={styles.chart}>
            <div className={styles.butt}>
                <button className={activeFilter==="ALL"?styles.buttonactive:styles.button} type="button" onClick={()=>{setActiveFilter("ALL")}}>ALL</button>   
                <button className={activeFilter==="BEFORE"?styles.buttonactive:styles.button} type="button" onClick={()=>{setActiveFilter("BEFORE")}}>BEFORE</button>
                <button className={activeFilter==="FINISHED"?styles.buttonactive:styles.button} type="button" onClick={()=>{setActiveFilter("FINISHED")}}>FINISHED</button>    
            </div>
            <div className={styles.chartcomp}>
                <Chart
                type="line"
                data={{
                    labels: generateBlockedArray(),
                    datasets: [
                    {
                        data: cfdata.filter(dataFilter).map(o=>{return Number(o.durationSeconds)}),
                        label: "Contest Duration",
                        borderColor: " #1ca87d",
                        fill: false,
                    },
                    ],
                }}
                options={buildOptions(
                    `Graph between contest rating and contest duration`,
                    true,
                    isMobile?false:true
                )}
                />
            </div>
        </div>
    );
}

export default ContestChart;