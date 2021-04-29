import { Console } from 'node:console'
import React, { MouseEvent, useState } from 'react'
import styles from './SidenavMenu.module.css'

interface SidenavBarProps {
    children: React.ReactNode;
}

const SidenavMenu = ({ children }: SidenavBarProps) => {


    const menu = [
        {
            title: "Home",
            icon: <i className="fas fa-home" />,
            subMenu: [
                {
                    title: "teste",
                    icon: "",
                },
                {
                    title: "teste1",
                    icon: "",
                },
                {
                    title: "teste2",
                    icon: "",
                }
            ]
        },
        {
            title: "Perfil",
            icon: <i className="fas fa-user" />,
            subMenu: [{
                title: "teste",
                icon: "",
            },
            {
                title: "teste1",
                icon: "",
            },
            {
                title: "teste2",
                icon: "",
            }]
        },
    ]

    const [menuOpen, setMenuOpen] = useState(false)
    const [hasUl, setHasUl] = useState(false)

    const [anchorHtml, setAnchorHtml] = useState<HTMLAnchorElement>();

    function iconOpenSubMenuToggle(e: MouseEvent<HTMLAnchorElement>) {
        let ul = e.currentTarget.nextElementSibling;
        let toggle = e.currentTarget.querySelector("#toggle")

        if (ul !== null) {
            setMenuOpen(!menuOpen)
            if (ul.classList.contains(styles.show)) {
                ul.classList.remove(styles.show)
                toggle.classList.remove(styles.iconOpenSubMenuToggle)
            }
            else{
                ul.classList.add(styles.show)
                toggle.classList.add(styles.iconOpenSubMenuToggle)
            }
        }
    }


    return (
        <>
            <aside className={styles.sidebar}>
                <div className={styles.navItems}>
                    <ul>
                        {
                            menu.map(item => {
                                return (
                                    <li key={item.title}>
                                        <a className={`${styles.navMenu}`} onClick={e => iconOpenSubMenuToggle(e)}>
                                            <span className={styles.iconText}>
                                                <span className={`icon`}>
                                                    {item.icon}
                                                </span>
                                                <span className={styles.icon}>{item.title}</span>                                                
                                            </span>
                                            {item.subMenu.length > 0 && (
                                                    <span id="toggle" className={`${styles.iconOpenSubMenu}`}>
                                                        <i className='fas fa-chevron-left' />
                                                    </span>
                                                )}
                                        </a>
                                        {item.subMenu.length > 0 && (
                                            <ul className={`${styles.subMenu}`}>
                                                {item.subMenu.map(sub => {
                                                    return (
                                                        <li key={sub.title}>
                                                            <a>{sub.title}</a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        )}

                                    </li>
                                )
                            })
                        }

                        {/* <li onClick={e => iconOpenSubMenuToggle(e)}>
                            <a>
                                <span className="icon-text">
                                    <span className={`icon`}>
                                        <i className="fas fa-user" />
                                    </span>
                                    <span className={styles.icon}>Perfil</span>
                                </span>
                            </a>
                            <ul>
                                <li>
                                    <a href="/#teste">Teste</a>
                                </li>
                                <li>
                                    <a href="">Teste</a>
                                </li>
                                <li>
                                    <a href="">Teste</a>
                                </li>

                            </ul>
                        </li> */}
                    </ul>

                </div>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

export default SidenavMenu
