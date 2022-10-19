import styles from './sideBar.module.css';
import {NavLink} from "react-router-dom";

const sideBar = () => {
    return (
        <nav className='sideBar'>
            <div className={styles.wrapper}>
                <NavLink to='/profile' className={({isActive }) => isActive ? `${styles.activeLink}` : ''}>Profile</NavLink>
                <NavLink to='/dialogs' className={({isActive }) => isActive ? `${styles.activeLink}` : ''}>Dialogs</NavLink>
                <NavLink to='/music' className={styles.link}>Music</NavLink>
                <NavLink to='/news' className={styles.link}>News</NavLink>
                <NavLink to='/settings' className={styles.link}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default sideBar;