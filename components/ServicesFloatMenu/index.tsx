import React, { useState } from 'react'
import ServicesCommercialAdvice from '../ServicesCommercialAdvice';
import ServicesTrainingInCompany from '../ServicesTrainingInCompany';
import styles from './styles.module.css'

const ServicesFloatMenu = () => {

    const [selected, setSelected] = useState(1);

    return (
        // <div className={`w-25 ${styles.fixed}`} >
        <div className="container h-100">
            <div className="row">
                <div className="col col-sm-12 d-flex flex-row justify-content-center align-items-center">
                    <div className={`${styles.btnGroup} ${selected === 1 ? styles.active : ""}`} onClick={() => setSelected(1)}>
                        <button className={styles.btnIcon}><i className="fas fa-briefcase"></i></button>
                        <button className={styles.btn}>
                            Assessoria Comercial
                        </button>
                    </div>
                    <div className={`${styles.btnGroup} ${selected === 2 ? styles.active : ""}`} onClick={() => setSelected(2)}>
                        <button className={styles.btnIcon}><i className="fas fa-book-reader"></i></button>
                        <button className={styles.btn}>
                            Treinamento In Company
                        </button>
                    </div>
                </div>
            
                <div className="col col-xs-12">
                    {selected === 1 ? (
                        <ServicesCommercialAdvice />
                    ) : (
                        <ServicesTrainingInCompany />
                    )}

                </div>
            </div>


            {/* <div className="fixed-container">
                <div id="list-example" className="list-group" >
                    <a className="list-group-item list-group-item-action mb-1" href="#ac">Assessoria Comercial</a>
                    <a className="list-group-item list-group-item-action" href="#tc">Treinamentos In Company</a>
                </div>
            </div> */}
            {/* <div className={styles.image}></div> */}
            {/* <div className="message">
                <blockquote className="blockquote text-center my-3">

                    Identificamos seu cenário comercial e promovemos diversas soluções
                    para gerar <br /><strong>foco no que verdadeiramente importa.</strong>

                </blockquote>
            </div> */}
        </div>
    )
}

export default ServicesFloatMenu