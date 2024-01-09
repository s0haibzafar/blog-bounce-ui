import { Link } from 'react-router-dom';
import styles from './error.module.css'

function Cryptocoin() {

    return <div className={styles.errorWrapper}>
        <div className={styles.errorHeader} >Error 404 - Page Not Found</div>
        <div className={styles.errorBody} >
            Go back to <Link to="/" className={styles.homeLink} >Home</Link>
        </div>
    </div>
}

export default Cryptocoin;