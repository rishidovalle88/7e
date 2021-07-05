import React, { useContext, useState } from 'react'
import { CourseContext } from '../../contexts/CourseContext'
import Button from '../Button'
import Divider from '../Divider'
import Input from '../Input'
import Switch from '../Switch'
import TextArea from '../TextArea'
import CourseList from './CourseList'
import styles from '../../pages/adm/courses/Course.module.css'
import { toast } from 'react-toastify';
import { Course } from '../../models/CourseModel'
import { ValidaString } from '../../Helpers/Validators'

const CourseCrud = () => {

    const { course, setCourse, courses, setCourses, isEdit, HandleShowNewCourse, HandleIsEdit, setIsInModule } = useContext(CourseContext);


    function CreateCourse() {

        if(!ValidaString(course.title)){
            toast.error("Título: Não é permitido valores vazios ou menores que 5 caracteres.");
            return;
        }

        course.id = Date.now();

        //Após inserir na base

        //Insere no array
        setCourses(courses => [...courses, course]);
        toast.success('Curso inserido com sucesso.')

        HandleIsEdit();
    }

    function createGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function DeleteCourse() {
        //Após remover da base

        //Remover do array
        const removeCourse = courses.filter(item => item.id !== course.id);
        console.log(removeCourse)
        setCourses(removeCourse);
        ClearCourseData()

        toast.success('Curso deletado com sucesso.')
    }

    function UpdateCourse() {

        //Após atualizar a base

        //Atualiza na query
        let index = courses.findIndex(f => f.id === course.id)
        let _courses = [...courses]
        _courses[index] = {
            ..._courses[index],
            title: course.title,
            description: course.description,
            isActive: course.isActive,
        }
        setCourses(_courses)

        toast.success('Curso atualizado com sucesso.')
    }

    function ClearCourseData() {
        const _emptyCourse: Course = { id: 0, userId: 0, title: "", description: "", isActive: false, modules: [] }
        setCourse(_emptyCourse)
        HandleShowNewCourse();
    }

    return (
        <>
            {/* <div className={`column is-12 has-text-centered ${showForm && styles.isActive}`} >
                <a onClick={() => HandleShowNewCourse()}>
                    <div className="box">
                        <span className="icon-text">
                            <span className="icon">
                                <i className={`fas fa-${showForm && !isEdit ? "minus" : "plus"}`} />
                            </span>
                            <span>Novo curso</span>
                        </span>
                    </div>
                </a>
            </div> */}


            <div className="column 4 showFadein">
                <div className="box">
                    <header>
                        <div className="subtitle">{isEdit ? ('Em edição') : 'Novo curso'}</div>
                    </header>

                    <Divider />

                    <Input
                        title="Título"
                        name="title"
                        styleW="is-12"
                        value={course.title || ''}
                        onChange={(e) => { setCourse({ ...course, title: e.currentTarget.value }) }}
                    />
                    <TextArea
                        title="Descrição"
                        name=""
                        styleW="is-12"
                        value={course.description}
                        onChange={e => setCourse({ ...course, description: e.currentTarget.value })}
                    />
                    <Switch
                        title="Disponibilizar"
                        name=""
                        styleW="is-12"
                        checked={course.isActive || false}
                        onChange={e => setCourse({ ...course, isActive: e.target.checked })}
                    />
                    <div className="columns is-multiline is-mobile">
                        <Button
                            isLoading={false}
                            styleW={`is-${isEdit ? 12 / 3 : 12 / 2}`}
                            styleButton="is-success"
                            label="Salvar"
                            onClick={e => isEdit ? UpdateCourse() : CreateCourse()} />
                        {isEdit && (
                            <Button
                                isLoading={false}
                                styleW={`is-${isEdit ? 12 / 3 : 12 / 2}`}
                                styleButton="is-danger"
                                label="Deletar"
                                onClick={e => DeleteCourse()}
                            />
                        )}
                        <Button
                            isLoading={false}
                            styleW={`is-${isEdit ? 12 / 3 : 12 / 2}`}
                            styleButton="is-default"
                            label="Cancelar"
                            onClick={e => HandleShowNewCourse()} />

                        {isEdit && (
                            <Button
                                isLoading={false}
                                styleW={`is-12`}
                                styleButton="is-info"
                                label="Módulo"
                                onClick={e => setIsInModule(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <CourseList />
        </>
    )
}

export default CourseCrud
