import React, { useState } from 'react'
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import SidenavMenu from '../SidenavMenu';
import styles from './style.module.css'
import Footer from '../Footer';


interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout = ({ title, children }: LayoutProps) => {

    const [isAuth, setIsAuth] = useState(false);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ToastContainer />
            <Header />

            {isAuth ? (
                <>
                    <SidenavMenu />
                    <main className={styles.main}>
                        {children}
                    </main>
                </>
            ) : (

                // <div className="container is-max-widescreen">
                <>
                    {children}
                </>
                // </div>
            )}



            {/* {isAuth && (<NavbarMenu />)} */}

            {/* <Footer /> */}
        </>

    )
}

export default Layout
