import React, { useContext } from 'react'
import {InputContext} from '../contexts/InputContext'

export const Text3 = () => {

    const t = useContext(InputContext)

    return (
        <div>
            <button onClick={t.showMessage}>Testar</button>
            {t.valor}
        </div>
    )
}
