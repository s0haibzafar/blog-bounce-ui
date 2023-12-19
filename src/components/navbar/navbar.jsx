import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'

function Navbar() {
    const isAuthenticated = false;
    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to='/' className={`${styles.logo} ${styles.inActiveStyle}`} >BlogBounce</NavLink>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle} >Home</NavLink>
                <NavLink to='crypto' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle} >Cryptocurrencies</NavLink>
                <NavLink to='blogs' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Blogs</NavLink>
                <NavLink to='submit' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Submit Blog</NavLink>
                { isAuthenticated ?  
                  <div>
                    <NavLink to='logout'>
                     <button className={styles.logOutBtn} >Log Out</button>
                    </NavLink>
                  </div>
                : <div><NavLink to='login' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>
                    <button className={styles.logInBtn} >LogIn</button>
                    </NavLink>
                    <NavLink to='register' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>
                    <button className={styles.registerBtn} >Register</button>
                </NavLink></div>}
            </nav>
            <div className={styles.seperator}></div>
        </>
    );
}

export default Navbar;
