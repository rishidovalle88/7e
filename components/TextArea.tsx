import React, { TextareaHTMLAttributes } from 'react'


interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string;
    name: string;
    styleW?: string;
    // onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ title, name, styleW, ...rest }: TextAreaProps) => {
    return (
        <div className={`column ${styleW}`}>
            <h6 className="is-small">{title}</h6>
            <div className="control">
                <textarea 
                name={name}
                className="textarea" 
                placeholder={title}
                {...rest}  />
            </div>
        </div>

    )
}

export default TextArea
