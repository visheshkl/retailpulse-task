import styles from './dfilter.module.css';

const Filter=({searchFilter,changeSearchFilter,activeFilter,setActiveFilter,setActive})=>{
    return(<div className={styles.filter}>
        <div className={styles.buttonwrap}>
            <button className={styles.button} type="button" onClick={()=>setActiveFilter("ALL")}>All</button>
            <button className={styles.button} type="button" onClick={()=>setActiveFilter("CF")}>CF</button>
            <button className={styles.button} type="button" onClick={()=>setActiveFilter("ICPC")}>ICPC</button>
            <button className={styles.button} type="button" onClick={()=>setActiveFilter("FAVORITE")}>Favourites</button>
        </div>
        <div>
            <input className={styles.input1} placeholder="Start typing to search..." type="text" onChange={(e)=>changeSearchFilter(e.target.value)} value={searchFilter}/>
        </div>
    </div>)
}

export default Filter;