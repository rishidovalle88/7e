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
                <span className="icon">
                    <span className="fa-stack fa-sm">
                        <i className={`${props.icon} fa-stack-2x`} />
                    </span>
                </span>

                <p className="s-size-1-mobile has-text-weight-bold">
                    {props.title}
                </p>
                {/* <p className="s-size-2-mobile">
                    {props.subtitle}
                </p> */}
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
