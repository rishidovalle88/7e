import React from 'react'
import styles from './styles.module.css'

const PartnerBlockTwo = () => {
    return (
        <div className="my-5 overflow-hidden"  style={{ backgroundColor: "#5C636A" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 mt-5 text-center text-white">
                            <h1 className="display-5">
                                Como ser um professor parceiro?
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="row my-5 d-flex justify-content-between">
                    <div className={`col-sm-6 text-center`}>
                        <h1 className={styles.blockHowBePartnerImg}></h1>
                    </div>
                    <div className="col-sm-6 mt-5 text-white">
                        <h1>1 - Faça seu cadastro</h1>
                        <h1>2 - Aguarde nosso contato</h1>
                        <h1>3 - Seja remunerado</h1>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                        <a href="#form" className="btn my-5 shadow btn-lg" style={{ backgroundColor: "#FFE41E", color: "#000000" }}>
                            Cadastrar
                            <i className="mx-2 fas fa-arrow-circle-down"></i>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default PartnerBlockTwo
