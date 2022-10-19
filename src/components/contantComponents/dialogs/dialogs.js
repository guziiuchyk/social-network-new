import styles from './dialogs.module.css'
import DialogsList from "./dialogsList/dialogsList";
import Messages from "./messages/messages";

const dialogs = (props) => {
    return (
    <div className={styles.wrapper}>
        <DialogsList />
        <Messages />
    </div>
    )
}

export default dialogs;