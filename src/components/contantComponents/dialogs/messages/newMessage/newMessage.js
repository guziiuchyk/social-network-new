import styles from "./newMessage.module.css";

const newMessage = (props) => {
    return (
        <div className={styles.newMessage}>
            <textarea className={styles.newMessageTextarea}></textarea>
            <div className={styles.newMessageButton}> </div>
        </div>
    )
}

export default newMessage;