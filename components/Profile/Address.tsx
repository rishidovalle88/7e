import React, { ChangeEvent, useContext, useState } from 'react'
import axios from 'axios';
import { ValidaCEP } from '../../Helpers/Validators'
import { toast } from 'react-toastify';
import { ProfileContext } from '../../contexts/ProfileContext';

interface viacepReponse {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

const Address = () => {
    const { address, setAddress } = useContext(ProfileContext)    

    const [isLoading, setIsLoading] = useState(false);

    function HandleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setAddress({ ...address, [e.currentTarget.name]: e.currentTarget.value })
    }

    async function ColetaEnderecoPorCep() {
        setIsLoading(true);
        if (ValidaCEP(address?.cep)) {
            const { data } = await axios.get<viacepReponse>(`https://viacep.com.br/ws/${address.cep}/json`);
            setAddress({
                ...address,
                city: data.localidade,
                district: data.bairro,
                uf: data.uf,
                street: data.logradouro
            })
            setIsLoading(false);            
            return;
        }
        console.log("data")
        toast.error("CEP informado está com o formato errado, por favor, verifique!")
        setIsLoading(false);
    }

    return (
        <>
            <form className="box">
                <p className="title">Endereço</p>
                <div className="columns">
                    <div className="column is-5">
                        <label className="label">CEP</label>
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="text" name="cep" value={address?.cep} onChange={e => HandleOnChange(e)} />
                            </div>
                            <div className="control">
                                <a className={`button is-info ${isLoading ? "is-loading" : ""}`} onClick={() => ColetaEnderecoPorCep()}>
                                    <i className="fas fa-search-location" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="column">
                        <div className="field ">
                            <label className="label">Rua</label>
                            <div className="control">
                                <input className="input" type="text" name="street" value={address?.street} onChange={e => HandleOnChange(e)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-one-quarter">
                        <div className="field">
                            <label className="label">Número</label>
                            <div className="control">
                                <input className="input" type="number" name="number" value={address?.number} onChange={e => HandleOnChange(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field ">
                            <label className="label">Complemento</label>
                            <div className="control">
                                <input className="input" type="text" name="complement" value={address?.complement} onChange={e => HandleOnChange(e)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Bairro</label>
                            <div className="control">
                                <input className="input" type="text" name="district" value={address?.district} onChange={e => HandleOnChange(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="field ">
                            <label className="label">Cidade</label>
                            <div className="control">
                                <input className="input" type="text" name="city" value={address?.city} onChange={e => HandleOnChange(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-2">
                        <div className="field ">
                            <label className="label">UF</label>
                            <div className="control">
                                <input className="input" type="text" name="uf" value={address?.uf} onChange={e => HandleOnChange(e)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="control">
                    <button className="button is-primary">Salvar</button>
                </div>
            </form>
        </>
    )
}

export default Address
