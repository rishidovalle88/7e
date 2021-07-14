import React, { useState } from 'react'
import styles from './styles.module.css'

interface ServicesTrainingInCompanyProps {
    title: string;
}

const ServicesTrainingInCompany = () => {
    const [ws, setWs] = useState<ServicesTrainingInCompanyProps[]>([
        {
            title: "Identificamos suas necessidades e desenvolvemos treinamentos específicos e adequados aos seus colaboradores e ao Seu Negócio;"
        },
        {
            title: "Metodologia problem-based learning com Aprendizagem Compartilhada / Ciclos de Aprendizagens Dinâmicos e com foco em Resultados;"
        },
        {
            title: "Mentoria para Lideres: As ferramentas e técnicas, elevam o nível de comprometimento do indivíduo, onde as soluções e ações são extraídas dele mesmo, pois é ele o maior conhecedor de sua realidade no que se refere a ambiente, necessidades, crenças e valores. "
        },
        {
            title: "Preparamos instrutores para atender as necessidades que você precisa desde qualificação técnica a formação e/ou capacitação individual."
        },
    ])
    return (
        <div className={`shadow ${styles.container}`} id="tc">
            <h4 className="display-6 text-center">
                Nossos Treinamentos promovem:
                <br />
            </h4>
            <blockquote className="text-center">A <strong>potencialização de <em>Resultados</em></strong>, por meio do uso  de recursos individuais já existentes, desenvolvendo e atribuindo novas habilidades.

Com o uso de <em>programação neurolinguística (PNL)</em> e técnicas específicas para <em>alta performance</em>, garantimos resultados <em>extraordinários</em> que irão impactar diretamente na Evolução de seus Negócios.
                
            </blockquote>
            <div className="row mt-5">
                {ws.map((item) => {
                    return (
                        <div key={item.title} className="col col-12 col-md-6">
                            <div className="card  border-0 mx-5" style={{ maxWidth: '100%' }}>
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

export default ServicesTrainingInCompany
