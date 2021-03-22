import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {    
    styleW?: string;
    isLoading: boolean;
    label: string;
    styleButton?: string;
    // onChange: (event: React.ChangeEvent<HTMLButtonElement>) => void
}

const Button = ({ styleW, isLoading = false, styleButton = "is-success", label, ...rest }: ButtonProps) => {
    return (
        <div className={`column ${styleW}`}>
            <div className="field">
                <div className="control">
                    <button
                        {...rest}
                        className={`button ${styleButton} ${isLoading && 'is-loading'}`}
                        style={{width: '100%'}}
                        >
                        {label}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Button
