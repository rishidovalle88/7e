import React, { useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'
import { Tooltip } from 'bootstrap'

const ContactFloat = () => {
    const tooltipRefE = useRef();
    const tooltipRefW = useRef();

    useEffect(() => {
        // new Tooltip(tooltipRefE.current); 
        // new Tooltip(tooltipRefW.current);
    }, [])

    return (
        <div className={styles.container}>
            <button className={`${styles.contact} ${styles.email} ${styles.bounce}`} ref={tooltipRefE} data-bs-toggle="tooltip" data-bs-placement="left" title="Email">
                <i className="fas fa-envelope-square fa-2x text-center"
                    style={{ backgroundColor: '#CA9E19', color: 'white' }}
                ></i>
            </button>
            <button className={`${styles.contact} ${styles.whatsapp} ${styles.bounce}`} ref={tooltipRefW}  data-bs-toggle="tooltip" data-bs-placement="left" title="WhatsApp">
                <i className="fab fa-whatsapp fa-2x text-center"
                    style={{ backgroundColor: '#00BFA5', color: 'white' }}
                ></i>
            </button>
        </div>
    )
}

export default ContactFloat
