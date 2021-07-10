import React, { useState } from 'react'
import styles from './styles.module.css'

interface ServicesTrainingInCompanyProps {
    title: string;
}

const ServicesTrainingInCompany = () => {
    const [ws, setWs] = useState<ServicesTrainingInCompanyProps[]>([
        {
            title: "Identificamos suas necessidades e desenvolvemos treinamentos específicos e adequados aos seus colaboradores e ao Seu Negocio."
        },
        {
            title: "Metodologia problem-based learning com Aprendizagem Compartilhada / Ciclos de Aprendizagens Dinâmicos e com foco em Resultados"
        },
        {
            title: "Construimos Soluções para seu Negocio com quem faz ele Acontecer"
        },
        {
            title: "Formação Técnica e Qualificação Online"
        },
        {
            title: "Preparamos instrutores para atender as necessidades que você precisa desde qualificação técnica a formação/capacitação empresarial."
        },        
    ])
    return (
        <div className={`shadow ${styles.container}`} id="tc">
            <h4 className="display-6 text-center">
                Treinamento In Company
            </h4>

            <div className="row mt-5">
                {ws.map((item) => {
                    return (
                        <div key={item.title} className="col col-12 col-md-6">
                            <div className="card mb-3 p-3" style={{ maxWidth: '100%' }}>
                                <div className="row g-0">
                                    <div className="col-2 col-md-1 mt-3">
                                        <svg style={{ color: "#CEA119" }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                        </svg>
                                    </div>
                                    <div className="col-10 col-md-10">
                                        <div className="card-body">
                                            <h6 className="card-title">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default ServicesTrainingInCompany
