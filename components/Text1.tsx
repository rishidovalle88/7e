import React, { useContext } from 'react'
import {InputContext} from '../contexts/InputContext'

export const Text1 = () => {

    const t = useContext(InputContext)

    return (
        <div>
            {t.valor}
        </div>
    )
}
