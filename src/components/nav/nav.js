import logo from '../../assets/images/logo.png';
import styles from './nav.module.css';

const Nav = ()=>{
    return(
        <nav className={styles.nav}>
            <img src={logo} className={styles.logo}></img>
        </nav>
    )
}

export default Nav;