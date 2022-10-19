import {NavLink} from "react-router-dom";
import styles from './dialog.module.css'

const dialoh = (props) => {
    return (
    <NavLink to={`/dialogs/${props.id}`} className={({isActive }) => isActive ? `${styles.activeLink}` : ''}>{props.name}</NavLink>
    )
}

export default dialoh;