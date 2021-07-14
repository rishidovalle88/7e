import React from 'react'
import styles from './styles.module.css'

const BlockForm = () => {

    return (
        <div id="form" className={`overflow-hidden shadow-lg ${styles.container}`}>
            <div className="row h-100">
                <div className="d-none d-sm-flex col-md-5 h-100 d-flex justify-content-between align-items-center" style={{ background: "#3B3B3B", height: "500px" }}>
                    <div className="text-center">
                        <h1 className="display-3 text-white">Fale com um especialista</h1>
                        <h5 className="text-white mt-5">
                            Produzimos atividades que facilitam o desenvolvimento das competências e dos comportamentos a serem expandidos e transformados.
                        </h5>
                    </div>
                </div>
                <div className={`${styles.bg} col col-xs-12 col-md-7 d-flex justify-content-center align-items-center`}>
                    <form className={`bg-white p-5 shadow`}> 
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Nós nunca compartilharemos seu email com ninguém!</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="phone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Mensagem</label>
                            <textarea className="form-control" id="message" rows={3} defaultValue={""} />
                        </div>

                        <button type="submit" className={`btn w-100 ${styles.btnSend}`} >Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlockForm
