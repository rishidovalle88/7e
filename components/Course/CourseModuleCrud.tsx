import React, { useContext, useState } from 'react'
import { CourseContext } from '../../contexts/CourseContext';

import Button from '../Button';
import Divider from '../Divider';
import Input from '../Input';
import Switch from '../Switch';
import TextArea from '../TextArea';
import CourseModuleList from './CourseModuleList';

import styles from '../../pages/adm/courses/Course.module.css'
import { toast } from 'react-toastify';
import { Module } from '../../models/CourseModel';
import { ValidaString } from '../../Helpers/Validators';

const CourseModuleCrud = () => {

    const { course, setCourse, courses, setCourses, module, setModule, setModules, setAulas, isEditModule, setIsEditModule, setIsInAula, setIsInModule } = useContext(CourseContext);

    const [isDeleting, setIsDeleting] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isLoadingAulas, setIsLoadingAulas] = useState(false);


    function LoadAulas(){
        setIsLoadingAulas(true);

        //Aqui faz pesquisa das aulas pelo id na API
 

        //Aqui preenche com o resultado vinda API
        setAulas([]);

        setIsLoadingAulas(false);
    }


    function CreateModule() {

        if(!ValidaString(module.title)){
            toast.error("Título: Não é permitido valores vazios ou menores que 5 caracteres.");
            return;
        }


        //Após inserir na base
        setIsSaving(true);
        //Insere no array
        module.id = Date.now();
        if (course.modules === undefined) course.modules = [];

        setCourse({ ...course, modules: [...course.modules, module] })

        let index = courses.findIndex(f => f.id === course.id)
        let _courses = [...courses]
        _courses[index] = {
            ..._courses[index],
            modules: [...course.modules, module]
        }

        setCourses(_courses);

        setIsEditModule(true);
        toast.success("Módulo inserido com sucesso")
        setIsSaving(false);
    }

    function DeleteModule() {
        setIsDeleting(true);

        //Após remover da base

        //Remover do array
        const removeModule = course.modules.filter(item => item !== module);
        setCourse({ ...course, modules: removeModule });
        let index = courses.findIndex(f => f.id === course.id);
        let _courses = [...courses];
        _courses[index] = {
            ..._courses[index],
            modules: removeModule
        }

        setCourses(_courses);

        setIsEditModule(false);
        ClearModuleData();
        toast.success("Módulo deletado com sucesso");

        setIsDeleting(false);
    }

    function UpdateModule() {
        setIsSaving(true);
        //Após atualizar a base

        //Atualiza na query
        let index = course.modules.findIndex(f => f.id === module.id);
        let _modules = [...course.modules]
        _modules[index] = {
            ..._modules[index],
            title: module.title,
            description: module.description,
            isActive: module.isActive,
        }
        setCourse({ ...course, modules: _modules });


        let indexCourse = courses.findIndex(f => f.id === course.id);
        let _courses = [...courses];
        _courses[indexCourse] = {
            ..._courses[indexCourse],
            modules: course.modules
        }

        setCourses(_courses);
        toast.success("Módulo atualizado com sucesso")

        setIsSaving(false);
    }

    function ClearModuleData() {
        const _emptyModule: Module = { id: 0, userId: 0, idCourse: 0, title: "", description: "", isActive: false, classes: [] }
        setModule(_emptyModule)
        setIsEditModule(false);
    }

    const _styles = {
        goHome: {
            margin: '20px',
            color: '#6C63FF',
        }
    }
    return (
        <>
            <div className="column is-12">
                <a style={_styles.goHome} onClick={() => { setIsInModule(false); ClearModuleData() }}>
                    <div className="icon-text">
                        <span className="icon" style={{ marginTop: '1px' }}>
                            <i className="fas fa-arrow-left"></i>
                        </span>
                        <span>Voltar para o curso: {course.title}</span>
                    </div>
                </a>
            </div>
            <div className={`column is-4 ${styles.showFadein}`}>
                <div className="box">
                    <header>
                        <div className="subtitle">{isEditModule ? ('Em edição') : 'Novo módulo'}</div>
                    </header>

                    <Divider />
                    <Input
                        title="Título"
                        name="title"
                        styleW="is-12"
                        value={module.title || ''}
                        onChange={(e) => { setModule({ ...module, title: e.currentTarget.value }) }}
                    />
                    <TextArea
                        title="Descrição"
                        name=""
                        styleW="is-12"
                        value={module.description}
                        onChange={e => setModule({ ...module, description: e.currentTarget.value })}
                    />
                    <Switch
                        title="Disponibilizar"
                        name=""
                        styleW="is-12"
                        checked={module.isActive}
                        onChange={e => setModule({ ...module, isActive: e.target.checked })}
                    />
                    <div className="columns is-multiline is-mobile">
                        <Button
                            isLoading={isSaving}
                            styleW={`is-${isEditModule ? 12 / 3 : 12 / 2}`}
                            styleButton="is-success"
                            label="Salvar"
                            onClick={() => isEditModule ? UpdateModule() : CreateModule()} />
                        {isEditModule && (
                            <Button
                                isLoading={isDeleting}
                                styleW={`is-${isEditModule ? 12 / 3 : 12 / 2}`}
                                styleButton="is-danger"
                                label="Deletar"
                                onClick={e => DeleteModule()} />

                        )}
                        <Button
                            isLoading={false}
                            styleW={`is-${isEditModule ? 12 / 3 : 12 / 2}`}
                            styleButton="is-default"
                            label="Cancelar"
                            onClick={e => ClearModuleData()} />

                        {isEditModule && (
                            <Button
                                isLoading={false}
                                styleW={`is-12`}
                                styleButton="is-info"
                                label="Aula"
                                onClick={e => setIsInAula(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <CourseModuleList />
        </>
    )
}

export default CourseModuleCrud
