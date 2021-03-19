import React, { HTMLAttributes, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    name: string;
    styleW?: string;
    // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const Input = ({ title, name, styleW, ...rest }: InputProps) => {
    return (
        <div className={`column ${styleW}`}>
            <div className="field">
                {/* <label className="label has-text-black"  >{title}</label> */}
                <h6 className="is-small mb-1">{title}</h6>
                <div className="control">
                    <input
                        className={rest.type === "text" || "password" || undefined ? "input" : "checkbox"}
                        name={name}
                        {...rest}
                    />
                </div>
            </div>
        </div>
    )
}

export default Input
