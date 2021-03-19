import React, { InputHTMLAttributes } from 'react'
import styles from '../styles/Switch.module.css'

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    name: string;
    styleW?: string;
}


const Switch = ({ title, name, styleW, ...rest }: SwitchProps) => {
    return (
        <div className={`column ${styleW}`}>
            <div className="field">
                <h6 className="is-small">{title}</h6>
                <label className={`mt-1 ${styles.switch}`}>
                    <input
                        type="checkbox"
                        name={name}
                        {...rest} />
                    <span className={`${styles.slider} ${styles.round}`} />
                </label>
            </div>
        </div>
    )
}

export default Switch
