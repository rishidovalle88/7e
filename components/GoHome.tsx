import Link from 'next/link'
import React from 'react'

const styles = {
    goHome: {
        margin: '20px',
        color: '#6C63FF',
    }
}

const GoHome = () => {
    return (
        <Link href="/">
            <a style={styles.goHome}>
                <div className="icon-text">
                    <span className="icon" style={{ marginTop: '3px' }}>
                        <i className="fas fa-arrow-left"></i>
                    </span>
                    <span>Ir para a página inicial</span>
                </div>
            </a>
        </Link>
    )
}

export default GoHome
