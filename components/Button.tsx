import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {    
    styleW?: string;
    isLoading: boolean;
    // onChange: (event: React.ChangeEvent<HTMLButtonElement>) => void
}

const Button = ({ styleW, isLoading = false, ...rest }: ButtonProps) => {
    return (
        <div className={`column ${styleW}`}>
            <div className="field">
                <div className="control">
                    <button
                        {...rest}
                        className={`button is-success ${isLoading && 'is-loading'}`}
                        style={{width: '100%'}}
                        >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Button
