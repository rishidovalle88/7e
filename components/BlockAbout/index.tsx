import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import { Carousel } from 'bootstrap'

const BlockAbout = () => {

    // const [carousel, setCarousel] = useState(null);
    // const CarouselRef = useRef()
    // useEffect(() => {
    //     setCarousel(
    //         new Carousel(CarouselRef.current)
    //     )
    // }, [])

    return (
        <div className={`p-5 overflow-hidden ${styles.firstBlock}`}>
            <div className="container text-center">
                <h1 className="display-1 text-white">
                    <span style={{color: "#CEA119"}}>7E</span>quilibrium
                </h1>
                <h1 className="text-white">É a parceira certa para o sucesso do seu negócio.</h1>
                <h2 className="mt-5 fs-5 text-white d-none d-sm-block">
                    Somos uma consultoria empresarial que atua dentro das organizações, assessorando na gestão de negócios, <strong>aperfeiçoando</strong> e indicando estratégias de <strong>marketing, vendas</strong>, seleção de profissionais e qualificação.
                </h2>
                <div className="d-grid gap-2 col-6 mx-auto mt-5 mb-5">
                    <a className="btn btn-outline-light" type="button" href="#form">Saiba como</a>
                </div>
                <br/><br/><br/>
            </div>
        </div>
    )
}

export default BlockAbout
