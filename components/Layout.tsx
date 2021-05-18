import React, { useState } from 'react'
import Footer from './Footer'
import NavbarMenu from './NavbarMenu';
import SidenavMenu from './SidenavMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Head from 'next/head';



interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout = ({title, children }: LayoutProps) => {

    const [isAuth, setIsAuth] = useState(true);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
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
