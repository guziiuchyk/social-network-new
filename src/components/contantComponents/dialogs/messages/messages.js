import styles from './messages.module.css'
import MessagesList from "./messagesList/messagesList";
import NewMessage from "./newMessage/newMessage";

const messages = (props) => {
    return (
        <div className={styles.wrapper}>
            <MessagesList />
            <NewMessage />
        </div>
    )
}

export default messages;