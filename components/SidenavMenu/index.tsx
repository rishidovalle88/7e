import React, { MouseEvent, useRef, useState } from 'react'
import styles from './SidenavMenu.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'

interface SidenavBarProps {
    children: React.ReactNode;
}


const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

const SidenavMenu = ({ children }: SidenavBarProps) => {

    const ulRef = useRef<HTMLUListElement>();
    let [width, setWidth] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth())
            setMenuOpen(getWidth() < 768)
        };

        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [width])

    const menu = [
        {
            title: "Quiz",
            icon: <i className="fas fa-home" />,
            isActiveUrl: "/adm/quiz" === useRouter().pathname,
            url: "/adm/quiz",
            subMenu: []
        },
        {
            title: "Perfil",
            icon: <i className="fas fa-user" />,
            isActiveUrl: "/profile" === useRouter().pathname,
            url: "/profile",
            subMenu: []
        },
        {
            title: "Cursos",
            icon: <i className="fas fa-user" />,
            isActiveUrl: useRouter().pathname.includes("/adm/courses"),
            url: "/adm/courses",
            subMenu: [
                // {
                //     title: "Adicionar",
                //     isActive: "/adm/courses#a" === useRouter().pathname,
                //     url: "/adm/courses#a"
                // },
                // {
                //     title: "Listar",
                //     isActive: "/adm/courses#c" === useRouter().pathname,
                //     url: "/adm/courses#c"
                // }
            ]
        },
    ]



    function iconOpenSubMenuToggle(e: MouseEvent<HTMLAnchorElement>) {
        let ul = e.currentTarget.nextElementSibling;
        let toggle = e.currentTarget.querySelector("#toggle")
        // if (ul !== null) {

        if (ul.classList.contains(styles.show)) {
            ul.classList.remove(styles.show)
            toggle.classList.remove(styles.iconOpenSubMenuToggle)
        }
        else {
            ul.classList.add(styles.show)
            toggle.classList.add(styles.iconOpenSubMenuToggle)
        }
        // }
    }

    function HandleMenuControl() {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className={styles.menuBurger}>
                <a className={styles.menuBurgerContent} onClick={() => HandleMenuControl()}>
                    <i className="fas fa-bars"></i>
                </a>
            </div>

            <aside className={`${styles.sidebar} ${width < 768 && menuOpen ? styles.hideSidebar : ""}`}>
                <div className={styles.navItems}>
                    <ul ref={ulRef}>
                        {
                            menu.map(item => {
                                return (
                                    <li key={item.title}>

                                        {item.subMenu.length > 0 ?
                                            (
                                                <>
                                                    <a className={`${styles.navMenu} ${item.isActiveUrl && styles.active}`} onClick={e => iconOpenSubMenuToggle(e)}>
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
                                                    <ul className={`${styles.subMenu} ${item.isActiveUrl ? styles.show : ""}`}>
                                                        {item.subMenu.map(sub => {
                                                            return (
                                                                <li key={sub.title} className={sub.isActive ? styles.focused : ""}>
                                                                    <Link href={sub?.url}>
                                                                        <a>{sub.title}</a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <Link href={item.url}>
                                                        <a className={`${styles.navMenu} ${item.isActiveUrl && styles.active}`}>
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
                                                    </Link>
                                                </>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
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
