import NewPost from "./newPost/newPost";
import Posts from "./posts/posts";
import styles from './myPosts.module.css'

const myPosts = () => {
    return (
        <div>
            <div className={styles.myPostsText}>My Posts </div>
            <NewPost />
            <Posts />

        </div>
    )
}

export default myPosts;