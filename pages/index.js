import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from '../src/components/nav/nav';
import Filter from '../src/components/dfilter/dfilter';
import Table from '../src/components/table/table';
import Pagination from '../src/components/pagination/pagination';

export default function Home() {
  const [cfdata,setcfdata]=useState([]);
  const [active,setActive]=useState(1);
  const [pageSize, setPageSize]=useState(10);
  const [activeFilter,setActiveFilter]=useState("ALL");
  const [searchFilter,changeSearchFilter]=useState("");

  const dataFilter=(o)=>{
  
    if(activeFilter==="ALL" || o.type===activeFilter||(o.favorite===true&&activeFilter==="FAVORITE"))
    {
      return o.name.toLowerCase().includes(searchFilter);
    }

    return false;
  }
  
  useEffect(()=>{
		fetch('https://codeforces.com/api/contest.list')
      .then(response => response.json())
      .then(cfdata => {setcfdata(cfdata.result)});
  }, [])
  

  return (
        <div className={styles.home}>
          <Nav/>
          <Filter searchFilter={searchFilter} changeSearchFilter={changeSearchFilter} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
          <div className={styles.table}>
            {cfdata&& <Table cfdata={cfdata.filter(dataFilter).slice((active-1)*pageSize,(active)*pageSize)}/>}
            {cfdata&&<Pagination totalCount={cfdata.filter(dataFilter).length/pageSize} active={active} setActive={setActive} pageSize={pageSize} setPageSize={setPageSize}/>}
          </div>
        </div>
  )
}
