import React from 'react'

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <footer className="bg-secondary">
            <div className="container d-flex justify-content-between align-items-center py-5 text-white">
                &copy; {date} by 7Equilibrium created by RVCTec.
            </div>
        </footer>
    )
}

export default Footer