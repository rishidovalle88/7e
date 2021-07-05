import React, { InputHTMLAttributes, useState } from 'react'
interface InputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    action: string;
    fn?: () => void;
}

const InputButton = ({ label, type, action, fn, ...rest }: InputButtonProps) => {
    return (
        <div className="column is-12">
            <label className="label">{label}</label>
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input className="input" type={type}
                        {...rest}
                    />
                </div>
                <div className="control">
                    <a className="button has-text-light has-background-success-dark"
                        onClick={e => fn}>
                        {action}
                    </a>
                </div>
            </div>
        </div>
    )
}

const Account = () => {
    return (
        <form className="box">
            <p className="title">Meus dados</p>
            <div className="columns is-multiline">
                <InputButton
                    label="Nome"
                    type="text"
                    action="Alterar"
                />
                <InputButton
                    label="E-mail"
                    type="email"
                    action="Alterar"
                />
                <InputButton
                    label="Telefone"
                    type="text"
                    action="Alterar"
                />
                <InputButton
                    label="Senha"
                    type="password"
                    action="Alterar"
                />
                <InputButton
                    label="CPF/CNPJ"
                    type="text"
                    action="Alterar"
                />
            </div>
        </form>
    )
}

export default Account
