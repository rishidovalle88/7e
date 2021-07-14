import React from 'react'
import styles from './styles.module.css'
const BlockContact = () => {

    function GotoSocial(social: string) {
        switch (social) {
            case "facebook":
                window.location.href = ""
                break;
            case "instagram":
                window.location.href = ""
                break;
            case "youtube":
                window.location.href = ""
                break;
            case "whatsapp":
                window.location.href = ""
                break;
            case "email":
                window.location.href = ""
                break;

            default:
                break;
        }
    }

    return (
        <div className={`${styles.container} container d-flex justify-content-center mt-5 mb-5 pt-5`}>
            <div className="row">
                <h1 className="display-4 text-dark text-center mb-5">
                    Acompanhe nossas redes
                </h1>
                <div className={`col col-xs-6 pb-3 ${styles.social}`}>
                    <div className="card">
                        <i className="w-100 p-5 fab fa-facebook-f fa-2x text-center"
                            style={{ backgroundColor: '#0268E3', color: 'white' }}
                        ></i>
                        <div className="card-body text-center">
                            <h5 className="card-title">FACEBOOK</h5>
                        </div>
                    </div>
                </div>

                <div className={`col col-xs-6 pb-3 ${styles.social}`}>
                    <div className="card">
                        <i className="w-100 p-5 fab fa-instagram-square fa-2x text-center"
                            style={{ backgroundColor: '#F52243', color: 'white' }}
                        ></i>
                        <div className="card-body text-center">
                            <h5 className="card-title">INSTAGRAM</h5>
                        </div>
                    </div>
                </div>                
                <div className={`col col-xs-6 pb-3 ${styles.social}`}>
                    <div className="card">
                        <i className="w-100 p-5 fab fa-youtube-square fa-2x text-center"
                            style={{ backgroundColor: '#FF0000', color: 'white' }}
                        ></i>
                        <div className="card-body text-center">
                            <h5 className="card-title">YOUTUBE</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockContact