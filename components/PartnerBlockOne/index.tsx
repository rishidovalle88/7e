import React from 'react'
import styles from './styles.module.css'

const PartnerFirstBlock = () => {
    return (
        <div className={styles.partinerApresentation}>
            <div className={`pt-5 mb-5 overflow-hidden ${styles.firstBlock}`}>
                <div className="container text-center mb-5">
                    <h1 className="display-1 text-white">
                        <span>Parceiros</span>
                    </h1>
                    <h1 className="text-white mt-3">Complemente <strong>sua renda</strong>, aumente seu engajamento. Diversifique suas atividades!</h1>
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-secondary mb-5 shadow">
                        Seja um professor parceiro
                        <i className="mx-2 fas fa-arrow-circle-down"></i>
                    </button>
                </div>
            </div>
            <div className="container">
                <div className={`row ${styles.whyPartiner}`} >
                    <div className="col-sm-12 text-center">
                        <h1 className="display-1">
                            Por que ser um parceiro?
                        </h1>
                        <h2 className="display-6">
                            Tem conhecimento, experiência profissional e/ou precisa de uma renda extra?
                        </h2>
                    </div>

                    <div className="col-sm-12 text-center">
                        <blockquote className="blockquote">Nós da 7E, buscamos parcerias com Instituições Privadas e Prefeituras, para oferecer Cursos de
                            Qualificação Técnica e Empresarial.
                            Oferecemos Capacitação e Suporte para o seu desenvolvimento como Instrutor de Ensino. <br /><br />
                            <strong>Vantagens:</strong>  Todo custo operacional e as buscas pelas oportunidades ficam por nossa Conta.
                        </blockquote >
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PartnerFirstBlock
