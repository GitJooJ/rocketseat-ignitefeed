import styles from './Header.module.css'

import joojLogo from '../assets/joojLogo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={joojLogo} alt="Logo do JooJ" />
            <strong>JooJ</strong>
        </header>
    );
}