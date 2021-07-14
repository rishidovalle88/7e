import React from 'react'
import styles from './styles.module.css'

const PartnerBlockThree = () => {
    return (
        <div className="container" id="form">
            <div className="my-5 d-flex justify-content-center align-items-center">
                <form className="row g-3 bg-white rounded shadow p-4">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome completo</label>
                        <input type="text" className="form-control" id="name" placeholder="Nome" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="joao@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cellphone" className="form-label">Celular (WhatsApp)</label>
                        <input type="text" className="form-control" id="cellphone" placeholder="(11) 91234-7894" />
                    </div>

                    <div className="row">
                        <label className="form-label">Selecione sua(s) especialidade(s)</label>
                        <div className="col-sm-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Cosmética / Aromaterapia
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Estética e Beleza
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Gastronomia
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Tecnologia
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Paisagismo
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Línguas
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Financeiro
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Pinturas/Artes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Música
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Dança
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Esportes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Outros
                                </label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn my-5 shadow btn" style={{ backgroundColor: "#FFE41E", color: "#000000" }}>
                        Cadastre-se
                    </button>
                </form>
            </div>
        </div>

    )
}

export default PartnerBlockThree
