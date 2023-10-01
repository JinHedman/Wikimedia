import styles from '../page.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
    <div className={styles.navbar}>
            <Link className={styles.navbarel} href='/users'><p>Show User</p></Link>
            <Link className={styles.navbarel} href='/adduser'><p>Create User</p></Link>
    </div>
        
    )
};

export default Navbar;