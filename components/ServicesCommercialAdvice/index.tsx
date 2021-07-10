import React, { useState } from 'react'
import styles from './styles.module.css'

interface ServicesCommercialAdviceProps {
    title: string;
}

const ServicesCommercialAdvice = () => {
    const [ws, setWs] = useState<ServicesCommercialAdviceProps[]>([
        {
            title: "Analise de Processos: Comerciais, Marketing, Recursos Humanos"
        },
        {
            title: "Promovemos Diagnósticos e Soluções Empresariais"
        },
        {
            title: "Geração de Leads"
        },
        {
            title: "Implementação de Metas"
        },
        {
            title: "Estratégias de Vendas"
        },
        {
            title: "Mentorias"
        },
        ,
        {
            title: "Coach para Lideres"
        },
        ,
        {
            title: "Otimização de Processos"
        },
        ,
        {
            title: "Aumento na Produtividade"
        },
        ,
        {
            title: "Estrategias para construir e Fortalecer sua Marca"
        },
    ])
    return (
        <div className={`shadow ${styles.container}`} id="ac">
            <h4 className="display-6 text-center">Assessoria Comercial </h4>
            <blockquote className="blockquote text-center my-3">

                Identificamos seu cenário comercial e promovemos diversas soluções
                para gerar <br /><strong>foco no que verdadeiramente importa.</strong>

            </blockquote>

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

export default ServicesCommercialAdvice
