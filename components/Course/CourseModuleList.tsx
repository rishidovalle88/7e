import React, { useContext } from 'react'
import { CourseContext } from '../../contexts/CourseContext';
import { Module } from '../../models/CourseModel';
import styles from '../../pages/adm/courses/Course.module.css'
import Divider from '../Divider';

const CourseModuleList = () => {

    const { course, setModule, setIsEditModule } = useContext(CourseContext);

    function GetCourseToDetail(item: Module) {
        setModule(item)
        setIsEditModule(true);
    }

    return (
        <div className="column is-8 showFadein">
            <div className="box">
                <header>
                    <div className="subtitle">Listagem de módulos</div>
                </header>
                <Divider />
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="Nome do módulo" />
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
                            <th>Módulo</th>
                            <th>Descrição</th>
                            <th>Classes</th>
                            <th>Status</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {course.modules?.map(item => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.title}</th>
                                    <th>{item.description} </th>
                                    <th>{item.classes?.length} </th>
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
                {course.modules?.length === 0 && (
                    <div className="box has-text-centered">
                        Nenhum módulo encontrado
                    </div>
                )}
            </div>
        </div>
    )
}

export default CourseModuleList
