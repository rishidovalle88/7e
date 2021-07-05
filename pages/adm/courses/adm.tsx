import React from 'react'
import Layout from '../../../components/Layout'
import { CourseProvider } from '../../../contexts/CourseContext'
import CourseMain from '../../../components/Course/CourseMain'

const Adm = () => {
    return (
        <Layout title="Cursos - Administração">
            <CourseProvider>
                <section className="section">
                    <h1 className="title">Curso</h1>
                    <nav className="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li>
                                <a>Curso</a>
                            </li>
                            <li className="is-active"><a href="#">Administração</a></li>
                        </ul>
                    </nav>
                </section>

                <section className="section">
                    <div className="columns is-multiline is-mobile">
                        <CourseMain />
                    </div>
                </section>

            </CourseProvider>
        </Layout >
    )
}

export default Adm
