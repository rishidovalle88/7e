import React, { ReactNode, useEffect, useState } from 'react'

interface ModalProps {
    typeModel: "danger" | "success" | "info"
    title: string;
    btnType: string;
    btnLabel: string;
    activateModal: string;
    children: React.ReactNode;
    fn: () => void;
    fnClose?: () => void;
}

const Modal = ({ title, btnType, btnLabel, children, activateModal, fn, fnClose }: ModalProps) => {

    const [activatedModal, setActivatedModal] = useState("")

    return (
        <div className={`modal ${activateModal}`}>
            <div className="modal-background" />
            <div className="modal-card">
                <header className="modal-card-head is-danger">
                    <p className="modal-card-title">{title}</p>
                    <button className="delete" aria-label="close" onClick={() => fnClose()} />
                </header>
                <section className="modal-card-body">
                    {children}
                </section>
                <footer className="modal-card-foot">
                    <button
                        className={`button ${btnType}`}
                        onClick={e => fn()}
                    >{btnLabel}</button>
                    <button className="button" onClick={() => fnClose()} >Fechar</button>
                </footer>
            </div>
        </div>

    )
}

export default Modal
