import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const ServiceApresentation = () => {

    return (
        <div className={styles.container}>
            <h1 className="display-1 text-white text-center pt-5">
                <strong><em>Identificamos</em></strong> seu cenário comercial e <strong><em>promovemos</em></strong> diversas <strong><em>soluções</em></strong> para gerar <br />
                <strong style={{color: '#CEA119', fontWeight: "bold"}}>foco no que verdadeiramente importa.</strong></h1>
            <h1 className="display-3"></h1>
            <h1 className="display-5"></h1>
        </div>
    )
}

export default ServiceApresentation
