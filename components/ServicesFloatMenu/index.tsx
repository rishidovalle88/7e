import React from 'react'
import styles from './styles.module.css'

const ServicesFloatMenu = () => {
    return (
        <div className={`w-25 ${styles.fixed}`} >
            <div className="fixed-container">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action" href="#ac">Assessoria Comercial</a>
                    <a className="list-group-item list-group-item-action" href="#tc">Treinamentos In Company</a>
                </div>
            </div>            
        </div>
    )
}

export default ServicesFloatMenu
