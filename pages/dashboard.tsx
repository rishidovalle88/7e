import React, { useState } from 'react'
import Avatar from '../components/Avatar'
import Divider from '../components/Divider'
import Layout from '../components/Layout'
import MyProgress from '../components/MyProgress'
import CardHome from '../components/CardHome'
import Table from '../components/Table'
import Card from '../components/Card/Card'

const Dashboard = () => {
    const [cursos] = useState([])
    return (
        <Layout title="Página Inicial">            

            <section className="section">
                <div className="columns is-mobile is-desktop is-vcentered">
                    <div className="column">
                        <h1 className="title has-text-weight-bold is-size-1">Olá, <strong>Rishi</strong></h1>
                        <h2 className="subtitle">Aqui começa sua ida para o próximo nível!</h2>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="columns is-multiline is-desktop">
                    <div className="column">
                        <Avatar />
                    </div>
                    <div className="column">
                        <MyProgress />
                    </div>
                </div>
            </section>
            <section className="section">
                <span className="is-size-3">Meus cursos</span>
                <Divider/>
                <div className="box">
                    <div className="columns is-multiline is-desktop is-centered">
                        {cursos.length === 0 && (
                            <div className="column is-12">
                                <div className="notification is-warning is-light has-text-centered is-size-5">
                                    <p>
                                        <span className="icon-text has-text-warning">
                                            <span className="icon is-large">
                                                <i className="fas fa-2x fa-exclamation-triangle" />
                                            </span>
                                        </span>
                                    </p>
                                Humm, ainda não tem nenhum <strong>curso</strong>?
                               <p>Vamos resolver isso agora.....<a>clique aqui!!!</a></p>
                                </div>
                            </div>
                        )}
                        {cursos.map(() => {
                            return (
                                <div className="column">
                                    <CardHome />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>

            <section className="section">
                <span className="is-size-3">O que posso fazer?</span>
                <Divider/>
                <div className="columns is-mobile is-multiline is-centered">

                    <div className="column">
                        <Card
                            icon="fas fa-edit"
                            title="Jogar Quizzes"
                            subtitle="Responder aos quizzes disponibilizados pelo tutor"
                            link="teste.com"
                        />
                    </div>
                    <div className="column">
                        
                        <Card
                            icon="fas fa-newspaper"
                            title="Ler Posts"
                            subtitle="Textos de apoio"
                            link="teste.com"
                        />
                        
                        
                    </div>

                </div>
            </section>

            <section className="section">
                <div className="columns is-mobile is-multiline is-centered">
                    <div className="column is-12">
                        <nav className="panel">
                            <p className="panel-heading">
                                Quizzes jogados
                                </p>
                            <Table />
                        </nav>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Dashboard
