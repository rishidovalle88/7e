import { ChangeEvent, createContext, Dispatch, MouseEvent, ReactNode, SetStateAction, useState } from 'react'
import { Course, Module, Class } from '../models/CourseModel';
import { toast } from 'react-toastify';
import classes from '*.module.css';

interface CourseContextData {
    course: Course;
    module: Module;
    aula: Class;
    setAula: Dispatch<SetStateAction<Class>>;
    setModule: Dispatch<SetStateAction<Module>>;
    setCourse: Dispatch<SetStateAction<Course>>;
    courses: Course[];
    modules: Module[];
    aulas: Class[];
    setAulas: Dispatch<SetStateAction<Class[]>>;
    setModules: Dispatch<SetStateAction<Module[]>>;
    setCourses: Dispatch<SetStateAction<Course[]>>;
    showFormCourse: boolean;
    isEdit: boolean;
    isEditModule: boolean;
    setIsEditModule: Dispatch<SetStateAction<boolean>>;
    HandleShowNewCourse: () => void;
    HandleIsEdit: () => void;
    ClearCourseData: () => void;
    isInModule: boolean;
    setIsInModule: Dispatch<SetStateAction<boolean>>;
    isInAula: boolean;
    setIsInAula: Dispatch<SetStateAction<boolean>>;
}

interface CourseProviderProps {
    children: ReactNode
}

export const CourseContext = createContext({} as CourseContextData)

export const CourseProvider = ({ children }: CourseProviderProps) => {

    const [aula, setAula] = useState<Class>({} as Class);
    const [module, setModule] = useState<Module>({} as Module);
    const [course, setCourse] = useState<Course>({} as Course);

    const [aulas, setAulas] = useState<Class[]>([]);
    const [modules, setModules] = useState<Module[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);

    const [showFormCourse, setShowFormCourse] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isEditModule, setIsEditModule] = useState(false);


    //Em status true, o componente de CRUD de módulos se abrirá
    const [isInModule, setIsInModule] = useState(false);

    //Em status true, o componente de CRUD de aulas se abrirá
    const [isInAula, setIsInAula] = useState(false);

    function HandleShowNewCourse(CancelHasClicked: boolean = false) {
        if (!isEdit && !CancelHasClicked)
            setShowFormCourse(!showFormCourse)
        else setShowFormCourse(false);

        setIsEdit(false)

        ClearCourseData();
    }

    function HandleIsEdit() {
        setIsEdit(true)
        setShowFormCourse(true)
    }

    function ClearCourseData() {
        const _emptyCourse: Course = { id: 0, userId: 0, title: "", description: "", isActive: false, modules: [] }
        setCourse(_emptyCourse)
    }

    return (
        <CourseContext.Provider value={{
            course, setCourse,
            module, setModule,
            aula, setAula,
            courses, setCourses,
            modules, setModules,
            aulas, setAulas,
            showFormCourse,
            isEdit,
            isEditModule, setIsEditModule,
            HandleShowNewCourse,
            HandleIsEdit,
            ClearCourseData,
            isInModule, setIsInModule,
            isInAula, setIsInAula,
        }}>
            {children}
        </CourseContext.Provider>
    )
}