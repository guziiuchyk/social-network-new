import styles from './message.module.css'

const message = (props) => {
    let isYou = props.isYou
    return (
        <div className={isYou ? `${styles.messageYou}` : `${styles.messageNotYou}`}>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' className={styles.userAvatar}></img>
            <div className={styles.message}>{props.messageText}</div>
        </div>
    )
}

export default message;