import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import NavbarMenu from './NavbarMenu';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    const [isAuth, setIsAuth] = useState(true);

    return (
        <>
            <Header />
            {isAuth && (<NavbarMenu/>)}
            <div className="container is-max-widescreen">
                {children}
            </div>

        </>

    )
}

export default Layout
