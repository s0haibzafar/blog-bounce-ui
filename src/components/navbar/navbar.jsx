import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to='/' className={`${styles.logo} ${styles.inActiveStyle}`} >BlogBounce</NavLink>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle} >Home</NavLink>
                <NavLink to='crypto' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle} >Cryptocurrencies</NavLink>
                <NavLink to='blogs' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Blogs</NavLink>
                <NavLink to='submit' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Submit Blog</NavLink>
                <NavLink to='login' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>LogIn</NavLink>
                <NavLink to='register' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Register</NavLink>
            </nav>
            <div></div>
        </>
    );
}

export default Navbar;
