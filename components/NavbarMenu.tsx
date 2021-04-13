import Link from 'next/link'
import React, { MouseEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'


interface INavbarMenu {
    isActive: boolean;
    title: string;
    link: string;
}

const NavbarMenu = () => {

    const initialValues = [
        {
            isActive: false,
            title: 'Inicio',
            link: '/dashboard'
        },
        {
            isActive: false,
            title: 'Meus progresso',
            link: '/my-progress'
        },
        {
            isActive: false,
            title: 'Perfil',
            link: '/profile'
        },
    ]

    const [navs, setNavs] = useState<INavbarMenu[]>(initialValues)
    const router = useRouter();
    
    useEffect(() => {
        function getSetActiveMenu(){
            let index = navs.findIndex(p => p.link === router.pathname)
            let _navs = [...navs];
            _navs[index] = {
                ..._navs[index],
                isActive: true
            }
            setNavs(_navs)
        }
        getSetActiveMenu()
    }, [])

    return (
        <section className="section">
            <div className="tabs is-centered">
                <ul>
                    {navs.map((item, idx) => {
                        return (
                            <li key={idx} className={`${item.isActive ? 'is-active' : ''}`}>
                                <Link href={item?.link}>
                                    <a>
                                        <span>{item.title}</span>
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default NavbarMenu
