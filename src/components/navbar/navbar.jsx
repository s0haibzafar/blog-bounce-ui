import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'

function Navbar(){
    return(
        <>
        <nav className={styles.navbar}>
            <NavLink className={`${styles.logo} ${styles.inActiveStyle}`} >BlogBounce</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Cryptocurrencies</NavLink>
            <NavLink>Blogs</NavLink>
            <NavLink>Submit Blog</NavLink>
            <NavLink>LogIn</NavLink>
            <NavLink>Register</NavLink>
        </nav>
        <div></div>
        </>
    );
}

export default Navbar;
