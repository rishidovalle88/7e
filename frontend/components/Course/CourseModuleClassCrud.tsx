import React, { useContext, useState } from 'react'
import { CourseContext } from '../../contexts/CourseContext';
import Button from '../Button';
import Divider from '../Divider';
import Input from '../Input';
import Switch from '../Switch';
import TextArea from '../TextArea';

import styles from '../../pages/adm/courses/Course.module.css'
import { toast } from 'react-toastify';
import { Class } from '../../models/CourseModel';
import CourseModuleClassList from './CourseModuleClassList';
import { ValidaString } from '../../Helpers/Validators';

const CourseModuleClassCrud = () => {
    const {        
        module,        
        aula,
        setAula,
        aulas,
        setAulas, 
        isEditModuleClass,
        setIsEditModuleClass,
        setIsInAula,
    } = useContext(CourseContext);

    

    function CreateAula() {
        if(!ValidaString(aula.title)){
            toast.error("Título: Não é permitido valores vazios ou menores que 5 caracteres.");
            return;
        }
        //Após inserir na base

        //Insere no array
        setAulas(aulas => [...aulas, aula]);
       
        toast.success("Aula inserida com sucesso")
    }

    function DeleteAula() {
        //Após remover da base

        //Remover do array
        const removeAula = aulas.filter(item => item.id !== aula.id);
        setAulas(removeAula);

        ClearAulaData();
        toast.success("Aula deletada com sucesso");
    }

    function UpdateAula() {

        //Após atualizar a base

        //Atualiza na query
        let index = aulas.findIndex(f => f.id === module.id);
        let _aulas = [...aulas]
        _aulas[index] = {
            ..._aulas[index],
            title: module.title,
            description: module.description,
            isActive: module.isActive,            
        }
        setAulas(_aulas);
        toast.success("Aula atualizada com sucesso")
    }

    function ClearAulaData() {
        const _emptyAula: Class = { id: 0, userId: 0, idModule: 0, title: "", description: "", isActive: false}
        setAula(_emptyAula)
        setIsEditModuleClass(false);
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
                <a style={_styles.goHome} onClick={() => { setIsInAula(false); ClearAulaData() }}>
                    <div className="icon-text">
                        <span className="icon" style={{ marginTop: '1px' }}>
                            <i className="fas fa-arrow-left"></i>
                        </span>
                        <span>Voltar para o módulo: {module.title}</span>
                    </div>
                </a>
            </div>
            <div className="column is-4 showFadein">
                <div className="box">
                    <header>
                        <div className="subtitle">{isEditModuleClass ? ('Em edição') : 'Novo módulo'}</div>
                    </header>

                    <Divider />
                    <Input
                        title="Título"
                        name="title"
                        styleW="is-12"
                        value={aula.title || ''}
                        onChange={(e) => { setAula({ ...aula, title: e.currentTarget.value }) }}
                    />
                    <TextArea
                        title="Descrição"
                        name=""
                        styleW="is-12"
                        value={aula.description}
                        onChange={e => setAula({ ...aula, description: e.currentTarget.value })}
                    />
                    <Switch
                        title="Disponibilizar"
                        name=""
                        styleW="is-12"
                        checked={aula.isActive}
                        onChange={e => setAula({ ...aula, isActive: e.target.checked })}
                    />
                    <div className="columns is-multiline is-mobile">
                        <Button
                            isLoading={false}
                            styleW={`is-${isEditModuleClass ? 12 / 3 : 12 / 2}`}
                            styleButton="is-success"
                            label="Salvar"
                            onClick={() => isEditModuleClass ? UpdateAula() : CreateAula()} />
                        {isEditModuleClass && (
                            <Button
                                isLoading={false}
                                styleW={`is-${isEditModuleClass ? 12 / 3 : 12 / 2}`}
                                styleButton="is-danger"
                                label="Deletar"
                                onClick={e => DeleteAula()} />

                        )}
                        <Button
                            isLoading={false}
                            styleW={`is-${isEditModuleClass ? 12 / 3 : 12 / 2}`}
                            styleButton="is-default"
                            label="Cancelar"
                            onClick={e => ClearAulaData()} />
                    </div>
                </div>
            </div>
            <CourseModuleClassList/>
        </>
    )
}

export default CourseModuleClassCrud
