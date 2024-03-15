import styles from './Header.module.css'
import bookmarkLogo from '../../assets/images/logo.svg'
import hamIcon from '../../assets/images/icon-hamburger.svg'

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.headerLogo} src={bookmarkLogo}/>
            <img className={styles.headerLogo} src={hamIcon}/>
        </div>
    );
}

export default Header