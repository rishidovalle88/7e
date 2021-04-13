import React from 'react'

const MyProgress = () => {
    return (
        <div className="box" style={{
            // marginTop: "-50px",
        }}>
            <div className="columns is-multiline is-mobile p-1">
                <div className="column is-12 has-text-centered mb-3">
                    <div className="title">Meu progresso</div>
                </div>
                <div className="column is-2 has-text-centered">
                    <span>0xp</span>
                </div>
                <div className="column is-8">
                    <progress className="progress is-primary is-large" value={20} max={100}>15%</progress>
                    <div style={{
                        marginTop: "-20px",
                        marginLeft: '20%',
                    }}>
                        <span style={{ marginLeft: "-1rem" }}>15xp</span>
                    </div>

                </div>
                <div className="column is-2 has-text-centered">
                    <h4>50xp</h4>
                </div>

            </div>
        </div>
    )
}

export default MyProgress
