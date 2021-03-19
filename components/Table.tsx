import React from 'react'

const Table = () => {
    return (
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th><abbr title="Identificado do quiz">Id</abbr></th>
                        <th><abbr title="Título do quiz">Quiz</abbr></th>
                        <th>Ação</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>
                            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                        </td>
                        <th><button>Visualizar</button></th>                        
                    </tr>
                    
                </tbody>
            </table>
    )
}

export default Table
