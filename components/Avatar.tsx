import React from 'react'

interface AvatarProps {
    firstname?: string;
    lastname?: string;
}

const Avatar = ({ firstname, lastname }: AvatarProps) => {
    return (
        <div className="box">
            <div className="columns is-multiline is-mobile is-centered p-3">
                <div className="column is-4 has-text-centered">
                    <figure className="image is-96x96">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                </div>
                <div className="column is-8">
                    <h2 className="is-size-5 has-text-weight-bold">Meu perfil</h2>
                    <span className="is-size-6">0 visualizações nos últimos 7 dias</span>
                    <button className="button is-normal is-fullwidth mt-3">Visualizar perfil</button>
                </div>
            </div>
        </div>
    )
}

export default Avatar
