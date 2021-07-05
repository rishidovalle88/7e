import React, { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    title: string;
    name: string;
    styleW?: string;
    options: [{ id: number, name: string; }]
    // onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Select = ({ title, name, styleW, options, ...rest }: SelectProps) => {
    return (
        <div className={`column ${styleW}`}>
            <div className="field">
                <h6 className="is-small">{title}</h6>
                <div className="control">
                    <div className="select">
                        <select style={{ width: '100vw' }} name={name} {...rest} >
                            <option value="0">Selecione...</option>
                            {options.map((item, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={item.id}>{item.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Select
