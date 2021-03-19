import React from 'react'

interface CardProps {
    title: string;
    subtitle?: string;
    link: string;
    icon: string;
}

const Card = (props: CardProps) => {
    return (
        <div className="card">
            <div className="card-content has-text-centered">
                <span className="icon is-medium">
                    <span className="fa-stack fa-sm">
                        <i className={`${props.icon} fa-stack-2x`} />
                    </span>
                </span>

                <p className="title">
                    {props.title}
                </p>
                <p className="subtitle">
                    {props.subtitle}
                </p>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item">
                    <span>
                        <a href={props.link}>Acessar</a>
                    </span>
                </p>
            </footer>
        </div>
    )
}

export default Card
