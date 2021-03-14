import styles from './pagination.module.css';
import React, {useState, useEffect} from 'react';

 const PageDirector=({number,disabled,arrow,active, setActive})=>{
    return(
        disabled?null:<a className={active? styles.active:styles.inactive} onClick={()=>setActive(number)}>{arrow||number}</a>
    );
}

const Pagination = ({totalCount,active,setActive,pageSize,setPageSize})=>{

    console.log(totalCount);
    return(
        <div className={styles.page}>
            <div className={styles.pagesize}>
                <p>ROWS PER PAGE</p>
                <input className={styles.input} value={pageSize} min="1" type="number" onChange={e=>{setPageSize(e.target.value);}} />
            </div>
            <div>
                <PageDirector setActive={setActive} disabled={active===1} arrow="<" number={active-1}/>
                    {
                        Array.apply(null, Array(5)).map((_,i)=>{
                            if(Math.trunc(totalCount)-active<5)
                            {
                                return (Math.trunc(totalCount)-5+i+1)<=0?null:Math.trunc(totalCount)-5+i+1;
                            }
                            else
                                return active+i;
                        }).map((e)=>{
                            
                            if(e<=totalCount)
                                return <PageDirector setActive={setActive} active={e===active} number={e} />
                            else
                                return null;
                        })
                    }
                <PageDirector setActive={setActive} disabled={active===Math.trunc(totalCount)} arrow=">" number={active+1}/>           
            </div>
        </div>
    )
}

export default Pagination;