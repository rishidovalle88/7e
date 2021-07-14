import React, { useState } from 'react';
import styles from './styles.module.css';

interface BlockWorkshopPros {
    title: string;
    description: string;
    url: string;
}

const BlockWorkshop = () => {

    const [ws, setWs] = useState<BlockWorkshopPros[]>([
        {
            title: "Gestão de Tempo",
            description: "Organização de tempo, definição de prioridades e técnicas de Gestão de tempo.",
            url: 'teste'
        },
        {
            title: " Marketing",
            description: "A arte de transformar seu produto em desejo, antes de ser vendido.",
            url: 'teste'
        },
        {
            title: "Entendendo a Reprogramação",
            description: " A PNL permite compreender o funcionamento interno dos nossos modelos mentais. Com técnicas e ferramentas podemos REPROGRAMAR nossas estruturas internas.",
            url: 'teste'
        },
        {
            title: "Compreendendo  Padrões Comportamentais",
            description: "Comportamentos que tendem a ser repetidos e nos levam as mesmas situções em diferentes areas da vida. Como identifica-los",
            url: 'teste'
        },
        {
            title: "Conheça o Método SAPIENS",
            description: "Metódologia desenvolvida para POTENCIALIZAR seus RESULTADOS.",
            url: 'teste'
            
        },
        {
            title: "Cursos de Qualificação Profissional e Pessoal",
            description: "Conheça nossa plataforma de Cursos",
            url: 'teste'
        },
    ])

    return (
        <div className={`d-flex justify-content-center align-items-center overflow-hidden mt-5 mb-5 ${styles.bgImage}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3 mt-3 text-center">
                        <h1 className="display-1 text-white">Nossos Workshops</h1>
                    </div>

                    {ws.map((item) => {
                        return (
                            <div key={item.title} className="col col-12 col-md-6">
                                <div className="card mb-3 p-3" style={{ maxWidth: '100%' }}>
                                    <div className="row g-0">
                                        <div className="col-2 col-md-2 mt-3">
                                            <svg style={{ color: "#CEA119" }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                            </svg>
                                        </div>
                                        <div className="col-10 col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.description}</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default BlockWorkshop
