import styles from './newPost.module.css'

let myPost = () => {
    return(
        <div className={styles.wrapper}>
            <textarea className={styles.textarea} name="newPostTextarea" id="newPostTextarea" cols="30" rows="10"></textarea>
            <div className={styles.button}> send </div>
        </div>
    )
};

export default myPost;