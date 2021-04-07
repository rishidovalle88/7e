import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Layout from "../components/Layout";
import MyProgress from "../components/MyProgress";
import Table from "../components/Table";

export default function Profile() {
    return (
        <Layout>
            <section className="hero is-small is-link mt-5" style={{
                borderRadius: "5px"
            }}>
                <div className="hero-body has-text-centered">
                    <div className="columns is-mobile">
                        <div className="column is-half is-offset-one-quarter">
                            {/* <Avatar /> */}
                        </div>
                    </div>

                    <div className="tabs is-centered is-toggle is-toggle-rounded">
                        <ul>
                            <li>
                                <a>
                                    <span className="icon is-small"><i className="fas fa-address-card"></i></span>
                                    <span>Cadastro</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="icon is-small"><i className="fas fa-shield-alt"></i></span>
                                    <span>Segurança</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section">
                <MyProgress />
            </section>


            <section className="section " style={{ marginTop: "-40px" }}>
                <div className="columns is-mobile is-multiline is-centered">
                    <div className="columns">
                        <div className="column is-4">
                            <Card
                                icon="fas fa-edit"
                                title="Quizzes"
                                subtitle="Responder aos quizzes disponibilizados pelo tutor"
                                link="teste.com"
                            />
                        </div>
                        <div className="column is-4">
                            <Card
                                icon="fas fa-newspaper"
                                title="Artigos"
                                subtitle="Textos de apoio"
                                link="teste.com"
                            />
                        </div>
                        <div className="column is-4">
                            <Card
                                icon="fas fa-file-invoice"
                                title="Documentação"
                                subtitle="Documentações disponibilizadas pelo tutor"
                                link="teste.com"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ marginTop: "-50px" }}>
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

