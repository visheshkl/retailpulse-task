import styles from './pagination.module.css';
import React, {useState, useEffect} from 'react';

 const PageDirector=({number,disabled,arrow,active, setActive})=>{
    return(
        disabled?null:<a className={active? styles.active:styles.inactive} onClick={()=>setActive(number)}>{arrow||number}</a>
    );
}

const Pagination = ({totalCount,active,setActive,pageSize,setPageSize})=>{

    return(
        <div className={styles.page}>
            <div className={styles.pagesize}>
                <p>ROWS PER PAGE</p>
                <input className={styles.input} value={pageSize} type="number" onChange={e=>{setPageSize(e.target.value);}} />
            </div>
            <div>
                <PageDirector setActive={setActive} disabled={active===1} arrow="<" number={active-1}/>
                    {
                        Array.apply(null, Array(5)).map((_,i)=>{
                            if(active+i<=totalCount)
                                return <PageDirector setActive={setActive} active={i===0} number={active+i} />
                            else
                                return null;
                        })
                    }
                <PageDirector setActive={setActive} disabled={active===totalCount} arrow=">" number={active+1}/>           
            </div>
        </div>
    )
}

export default Pagination;