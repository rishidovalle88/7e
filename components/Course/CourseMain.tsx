import React, { useContext } from 'react'
import { CourseContext } from '../../contexts/CourseContext';
import CourseCrud from './CourseCrud'
import CourseModuleCrud from './CourseModuleCrud'

const CourseMain = () => {

    const { isInModule, isInAula } = useContext(CourseContext);

    return (
        <>
            {/* Bloco de cursos */}
            {!isInModule && (
                <CourseCrud />
            )}

            {/* Bloco de módulos */}
            {(isInModule && !isInAula) && (
                <CourseModuleCrud />
            )}

            {/* Bloco de Aulas */}
            {(isInModule && isInAula) && (
                <h1>Bloco de aulas</h1>
            )}
        </>
    )
}

export default CourseMain
