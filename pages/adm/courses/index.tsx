import React, { useState } from 'react'
import CourseCrud from '../../../components/Course/CourseCrud'
import CourseDashboard from '../../../components/Course/CourseDashboard'
import CourseList from '../../../components/Course/CourseList'
import Layout from '../../../components/Layout'

import styles from './Course.module.css'

interface Menu {
    id: string;
    component?: React.ReactElement
}

const Courses = () => {
    const menuList = [
        {
            id: "crud",
            component: <CourseCrud />
        },
        {
            id: "info",
            component: <CourseDashboard />
        },
        {
            id: "list",
            component: <CourseList />
        },
    ]

    const [menuActive, setMenuActive] = useState<Menu>();

    function HandleChoiceMenu(id:string) {
        let _menu = menuList.find(m => m.id === id );
        setMenuActive({...menuActive, component: _menu.component, id: _menu.id})
    }

    return (
        <Layout>
            <section className="section">
                <h1 className="title">Curso</h1>
                <h2 className="subtitle">O que deseja fazer?</h2>
            </section>

            <div className="columns is-multiline is-mobile">

                <div className={`column has-text-centered ${menuActive.id === "crud" && styles.isActive}`} >
                    <a className={styles.isActive} onClick={() => HandleChoiceMenu("crud")}>
                        <div className="box">
                            <span>
                                <i className="fas fa-plus"></i>
                            </span>
                            <h3>Novo curso</h3>
                        </div>
                    </a>
                </div>
                <div className={`column has-text-centered ${menuActive.id === "list" && styles.isActive}`} >
                    <a onClick={() => HandleChoiceMenu("list")}>
                        <div className="box">
                            <span>
                                <i className="fas fa-list"></i>
                            </span>
                            <h3>Listar cursos</h3>
                        </div>
                    </a>
                </div>
                <div className={`column has-text-centered ${menuActive.id === "info" && styles.isActive}`} >
                    <a onClick={() => HandleChoiceMenu("info")}>
                        <div className="box">
                            <span>
                                <i className="fas fa-info"></i>
                            </span>
                            <h3>Informações gerais</h3>
                        </div>
                    </a>
                </div>
            </div>

            {menuActive?.component}


        </Layout>
    )
}

export default Courses
