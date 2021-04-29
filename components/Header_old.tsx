import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const HeaderOld = () => {

    const [menuIsActive, setMenuIsActive] = useState(true)
    const [classIsActive, setClassActive] = useState("");

    useEffect(() => {
        setMenuIsActive(menuIsActive)
    }, [])

    function activeMenu() {
        setMenuIsActive(!menuIsActive)
        setClassActive(menuIsActive ? "is-active" : "")
    }

    const styles = {
        burger: {
            color: '#F5F5F5'
        }
    }

    return (

        <nav className="navbar is-light">
            <div className="container">

                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" />
                    </a>

                    <span className={`navbar-burger ${classIsActive}`} data-target="navbarMenuHeroA" onClick={e => activeMenu()}>
                        <span style={styles.burger} />
                        <span style={styles.burger} />
                        <span style={styles.burger} />
                    </span>
                </div>
                <div id="navbarMenuHeroA" className={`navbar-menu ${classIsActive}`}>
                    <div className="navbar-end">                    
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <Link href="/login">
                                        <a className="bd-tw-button button">
                                            <span>
                                                Entrar
                                        </span>
                                        </a>
                                    </Link>
                                </p>
                                <p className="control">
                                    <Link href="/register">
                                        <a className="button is-primary">
                                            <span>Cadastrar</span>
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>                
            </div>
        </nav>

    )
}

export default HeaderOld
