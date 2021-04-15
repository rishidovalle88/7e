import React from 'react'

const Address = () => {
    return (
        <form className="box">
            <p className="title">Endereço</p>
            <div className="columns">
                <div className="column is-5">
                    <label className="label">CEP</label>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="text" placeholder="Find a repository" />
                        </div>
                        <div className="control">
                            <a className="button is-info">
                                <i className="fas fa-search-location" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="column">
                    <div className="field ">
                        <label className="label">Rua</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-one-quarter">
                    <div className="field">
                        <label className="label">Número</label>
                        <div className="control">
                            <input className="input" type="number" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field ">
                        <label className="label">Complemento</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Bairro</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="field ">
                        <label className="label">Cidade</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="field ">
                        <label className="label">UF</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="control">
                <button className="button is-primary">Salvar</button>
            </div>
        </form>
    )
}

export default Address
