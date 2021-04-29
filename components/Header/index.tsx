import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <section className={styles.header}>
            <div className={styles.logo}>
                <a>
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" />
                </a>
            </div>
            <ul>
                {/* <li><a className={styles.active} href="">Home</a></li>
                <li><a href="">Perfil</a></li>
                <li><a href="">Curso</a></li> */}
                <li><a href="#news">
                    <span className="icon-text">
                        <span className="icon">
                            <i className="fas fa-sign-out-alt" />
                        </span>
                        <span>Sair</span>
                    </span>
                </a></li>
            </ul>
        </section>
    )
}

export default Header
