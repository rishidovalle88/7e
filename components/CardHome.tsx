import React, { useState } from 'react'

const CardHome = () => {

    const [isHidden, setIsHidden] = useState('');

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Marketing
                </p>
                <a className="card-header-icon"  type="button"
                    onClick={() => setIsHidden(isHidden === "" ? "is-hidden" : "")}>
                    <i className={`fas fa-angle-${isHidden === "" ? "up" : "down"}`} aria-hidden="true" />
                </a>
                {/* <button className="card-header-icon" aria-label="more options"
                    onClick={() => setIsHidden(isHidden === "" ? "is-hidden" : "")}
                >
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </button> */}
            </header>
            <div className={`card-content ${isHidden}`}>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            <footer className="card-footer">
                <a href="#" className="card-footer-item">Acessar</a>
            </footer>
        </div>

    )
}

export default CardHome
