import React, { useContext } from 'react'
import { CourseContext } from '../../contexts/CourseContext';
import { Course } from '../../models/CourseModel';
import styles from '../../pages/adm/courses/Course.module.css'
import Divider from '../Divider';

const CourseList = () => {

    const { courses, setCourse, HandleIsEdit } = useContext(CourseContext);

    function GetCourseToDetail(item: Course) {
        setCourse(item)
        HandleIsEdit();
    }

    return (
        <div className="column is-8 showFadein">
            <div className="box">
                <header>
                    <div className="subtitle">Listagem de cursos</div>
                </header>
                <Divider />
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="Nome do curso" />
                    </p>
                    <p className="control">
                        <span className="select">
                            <select>
                                <option>Status</option>
                                <option>Ativo</option>
                                <option>Inativo</option>
                            </select>
                        </span>
                    </p>
                    <p className="control">
                        <a className="button is-info">
                            Pesquisar
                        </a>
                    </p>
                </div>

                <table className="table is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Curso</th>
                            <th>Descrição</th>
                            <th>Módulos</th>
                            <th>Status</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(item => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.title}</th>
                                    <th>{item.description} </th>
                                    <th>{item.modules?.length} </th>
                                    <th>{item.isActive ? 'Ativo' : 'Inativo'} </th>
                                    <th>
                                        <div className="buttons">
                                            <button
                                                className="button is-info"
                                                title="Editar"
                                                onClick={() => GetCourseToDetail(item)}
                                            ><i className="fas fa-edit"></i></button>

                                        </div>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {courses.length === 0 && (
                    <div className="box has-text-centered">
                        Nenhum curso encontrado
                    </div>
                )}
            </div>
        </div>
    )
}

export default CourseList
