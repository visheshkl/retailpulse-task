import FavIcon from '../../assets/svgs/AddToFav.svg';
import styles from './table.module.css';

const Table = ({cfdata,setcfdata,originalCFData,active,pageSize}) => {
    const addToFav=(i)=>{
      const newstate=[...originalCFData];
      newstate.forEach(o=>{
        if(o.id===i)
        {
          if(o.favorite)
            o.favorite=false;
          else
            o.favorite=true;
        }
      })
      setcfdata(newstate);
    }
    return (
      <table className={styles.table}>
        <thead>
          <tr className={styles.heading}>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Phase</th>
            <th>Duration</th>
            <th>Favourite</th>
          </tr>
        </thead>
        <tbody>
          { (cfdata.length > 0) ? cfdata.map( (cfdata, index) => {
             return (
              <tr className={styles.row} key={ index }>
                <td>{ cfdata.id }</td>
                <td>{ cfdata.name }</td>
                <td>{ cfdata.type}</td>
                <td>{ cfdata.phase}</td>
                <td>{ cfdata.durationSeconds}</td>
                <td onClick={()=>addToFav(cfdata.id)}><FavIcon className={cfdata?.favorite?styles.high:styles.normal}/></td>
              </tr>
            )
           }) : <tr><td className={styles.message}>No Data Available.....</td></tr> }
        </tbody>
      </table>
    );
  }

  export default Table;