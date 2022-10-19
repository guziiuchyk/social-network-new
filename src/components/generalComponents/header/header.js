import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src="https://1000marcas.net/wp-content/uploads/2022/05/Akatsuki-Logo.png" alt="logo"/>
        </div>
    )
}
export default Header;