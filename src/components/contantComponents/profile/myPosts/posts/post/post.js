import styles from './post.module.css'

const post = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.postImage}></div>
            <div className={styles.post}>{props.text}</div>
        </div>

    )
}

export default post;