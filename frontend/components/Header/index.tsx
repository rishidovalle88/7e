import Link from 'next/link'
import React, { MouseEvent, useState } from 'react'
import styles from './menu-responsivo.module.css'

const Header = () => {
    // const btnMobile = document.getElementById('btn-mobile');
    const [active, setActive] = useState(false);


    function toggleMenu(event: MouseEvent<HTMLButtonElement>) {        
        if (event.type === 'touchstart') event.preventDefault();
        setActive(!active)
        // const nav = document.getElementById('nav');        
        // const active = nav.classList.contains('active');
        // // event.currentTarget.setAttribute('aria-expanded', active);
        // if (active) {
        //     event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        // } else {
        //     event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        // }
    }

    // btnMobile.addEventListener('click', toggleMenu);
    // btnMobile.addEventListener('touchstart', toggleMenu);

    return (
        <header id={styles.header}>
            <a id={styles.logo}>
            <img className="align-middle" style={{width:'48px'}} src="logo7e.png" alt="" />
            </a>
            <nav id={styles.nav} className={active ? styles.active : ''}>
                <button aria-label="Abrir Menu" id={styles.btnMobile} aria-haspopup="true" aria-controls="menu" aria-expanded="false" onClick={(e) => toggleMenu(e)}>
                    <span id={styles.hamburger} />
                </button>
                <ul id={styles.menu} className={styles.ul} role="menu">
                    <li><a className={styles.a} href="/">Sobre</a></li>
                    <li><a className={styles.a} href="/">Produtos</a></li>
                    <li><a className={styles.a} href="/">Portfólio</a></li>
                    <li><a className={styles.a} href="/">Contato</a></li>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header
