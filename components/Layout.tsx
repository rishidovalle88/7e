import React, { useState } from 'react'
import Footer from './Footer'
import NavbarMenu from './NavbarMenu';
import SidenavMenu from './SidenavMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';



interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    const [isAuth, setIsAuth] = useState(true);

    return (
        <>
            <ToastContainer />
            <Header />

            {isAuth ? (
                <SidenavMenu>
                    {children}
                </SidenavMenu>
            ) : (
                <div className="container is-max-widescreen">
                    {children}
                </div>
            )}



            {/* {isAuth && (<NavbarMenu />)} */}


        </>

    )
}

export default Layout
