import React, { InputHTMLAttributes } from 'react'

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

export default InputButton;