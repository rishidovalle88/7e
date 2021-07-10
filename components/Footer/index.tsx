import React from 'react'
import styles from './styles.module.css'

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <footer className={`bg-secondary ${styles.footer}`}>
            <div className="container d-flex justify-content-between align-items-center py-1 text-white">
                &copy; {date} by 7Equilibrium created by RVCTec.
            </div>
        </footer>
    )
}

export default Footer