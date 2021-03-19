import React, { useEffect, useState } from 'react'

const Header = () => {

    const [menuIsActive, setMenuIsActive] = useState(true)
    const [classIsActive, setClassActive] = useState("");

    useEffect(() => {
        setMenuIsActive(menuIsActive)
    }, [])

    function activeMenu() {
        setMenuIsActive(!menuIsActive)
        setClassActive(menuIsActive ? "is-active" : "")
    }

    return (
        <nav className="navbar is-link">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                    </a>
                    <span className={`navbar-burger ${classIsActive}`} data-target="navbarMenuHeroA" onClick={e => activeMenu()}>
                        <span />
                        <span />
                        <span />
                    </span>
                </div>
                <div id="navbarMenuHeroA" className={`navbar-menu ${classIsActive}`}>
                    <div className="navbar-end">
                        <a className="navbar-item">
                            Sair
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header
