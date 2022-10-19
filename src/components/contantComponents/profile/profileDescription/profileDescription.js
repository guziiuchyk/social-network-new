import styles from './profileDescription.module.css'

const profileDescription = () => {
    return(
        <div className={styles.wrapper}>
            <div >
                <img className={styles.avatar} src="data:image/jpeg;base64,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" alt="avatar"/>
            </div>
            <div className={styles.profileInfo}>
                <div>name: asta</div>
                <div>age: 17 </div>
            </div>
        </div>

    )
}

export default profileDescription;