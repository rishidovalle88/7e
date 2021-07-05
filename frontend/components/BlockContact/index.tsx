import React from 'react'

const BlockContact = () => {
    return (
        <div className="container d-flex justify-content-center mt-5 mb-5 pt-5">
            <div className="row">
                <h1 className="display-4 text-dark text-center mb-5">
                    Acompanhe nossas redes
                </h1>

                <div className="col col-xs-6 col-sm-3 col-md-4 pb-3">
                    <div className="card">
                        <i className="w-100 p-5 fab fa-facebook-f fa-2x text-center"
                            style={{ backgroundColor: '#0268E3', color: 'white' }}
                        ></i>
                        <div className="card-body text-center">
                            <h5 className="card-title">FACEBOOK</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-6 col-sm-3 col-md-4 pb-3">
                    <div className="card">
                        <i className="w-100 p-5 fab fa-instagram-square fa-2x text-center"
                            style={{ backgroundColor: '#F52243', color: 'white' }}
                        ></i>
                        <div className="card-body text-center">
                            <h5 className="card-title">INSTAGRAM</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-6 col-sm-3 col-md-4 pb-3">
                    <div className="card">
                        <i className="w-100 p-5 fab fa-whatsapp fa-2x text-center"
                            style={{ backgroundColor: '#00BFA5', color: 'white' }}
                        ></i>
                        <div className="card-body text-center">
                            <h5 className="card-title">WHATSAPP</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-6 col-sm-3 col-md-6 pb-3">
                    <div className="card">
                        <i className="w-100 p-5 fab fa-youtube-square fa-2x text-center"
                            style={{ backgroundColor: '#FF0000', color: 'white' }}
                        ></i>
                        <div className="card-body text-center">
                            <h5 className="card-title">YOUTUBE</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-6 col-sm-3 col-md-6 pb-3">
                    <div className="card">
                        <i className="w-100 p-5 fas fa-envelope-square fa-2x text-center"
                            style={{ backgroundColor: '#CA9E19', color: 'white' }}
                        ></i>
                        <div className="card-body text-center">
                            <h5 className="card-title">EMAIL</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockContact
