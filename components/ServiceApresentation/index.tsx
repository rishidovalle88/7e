import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

interface ServiceApresentationProps {
    title: string;
    description: string
}

const ServiceApresentation = () => {

    const [msg, setMeg] = useState<ServiceApresentationProps[]>([
        {
            title: "Teste",
            description: "teste"
        },
        {
            title: "Teste1",
            description: "teste"
        },
        {
            title: "Teste2",
            description: "teste"
        }
    ]);

    return (
        <div className={styles.container}>
            <div className="container d-flex justify-content-between">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h2 className="text-gray text-center text-left pt-5 mb-5">
                            <strong><em>Identificamos</em></strong> seu cenário comercial e <strong><em>promovemos</em></strong> diversas <strong><em>soluções</em></strong> para gerar <br />
                            <br />
                            <strong className={styles.msgDestaque}>foco no que verdadeiramente importa.</strong>
                        </h2>
                    </div>
                    <div className={`col-12 pt-5 ${styles.btn}`}>
                        <a href="#servicesDescription" className="btn btn-secondary shadow text-center d-flex justify-content-center align-items-center">
                            Saiba mais sobre nossos serviços
                            <i className="mx-2 fas fa-arrow-circle-down" style={{ fontSize: "1.7rem" }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceApresentation
