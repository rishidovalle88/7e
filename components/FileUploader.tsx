import React, { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react'

const FileUploader = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState(false)

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        const file = e.target.files[0];

        setError(file.type !== 'application/pdf')

        if (file?.name !== undefined)
            setFileName(e.target.files[0].name)
        // handle validations
    }

    return (
        <div className="columns is-mobile is-multiline p-4" style={{ borderStyle: "dashed", borderRadius: "10px", borderColor: "grey" }}>
            <div className="column is-half is-offset-one-quarter">
                <div className="file has-name is-boxed">
                    <label className="file-label" style={{ width: '100%' }}>
                        <input className="file-input"
                            type="file"
                            name="resume"
                            onChange={e => handleFileInput(e)}

                        />
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload" />
                            </span>
                            <span className="file-label">
                                Carregar arquivo...
                            </span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="column is-half is-offset-one-quarter">
                <input className={`input ${error ? "is-danger" : "is-success"} has-text-centered`} readOnly style={{ width: '100%' }}
                    value={fileName === "" ? "Nenhum arquivo selecionado!" : fileName}
                />
            </div>
            <div className="column is-half is-offset-one-quarter">
                {error && (
                    <div className="notification is-danger is-light has-text-centered">
                        O aqrquivo <strong>{fileName}</strong>, 
                        não é um arquivo PDF válido.
                    </div>
                )}
            </div>



        </div>
    )
}

export default FileUploader

