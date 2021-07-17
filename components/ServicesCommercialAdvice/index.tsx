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
            <h4 className="display-6 text-center">Nossos <strong>Especialistas</strong> promovem: </h4>
            <br />
            <blockquote className="text-center">
                <strong>- Clarificação das metas</strong>, tornando-as claras, bem definidas e alinhadas com o propósito, missão, visão e valores da empresa, 
                estruturando-as com:
                <br/><br/>
               <p> <em> Especificidade; Mensuração; Quantificação, Qualificação; Atratividade, Compatibilidade com os valores e realismo. </em></p> 
            </blockquote>
            <div className="row mt-5">
                {ws.map((item) => {
                    return (
                        <div key={item.title} className="col col-12 col-md-6">
                            <div className="card mx-5 border-0" style={{ maxWidth: '100%' }}>
                                <div className="row g-0">
                                    <div className="col-2 col-md-1 mt-3">
                                        <i className="fas fa-check" style={{ color: "#00BEA3" }}></i>
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
