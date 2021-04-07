import { ChangeEvent, createContext, Dispatch, MouseEvent, ReactNode, SetStateAction, useState } from 'react'
import { Quiz, Question, Response } from '../models/Quiz'
import { ToastContainer, toast } from 'react-toastify';

interface QuizContextData {
    quiz: Quiz;
    question: Question;
    questions: Question[];
    response: Response;
    responses: Response[];
    setResponse: Dispatch<SetStateAction<Response>>,
    setResponses: Dispatch<SetStateAction<Response[]>>,
    setQuestion: Dispatch<SetStateAction<Question>>,
    setQuestions: Dispatch<SetStateAction<Question[]>>,
    setQuiz: Dispatch<SetStateAction<Quiz>>
}

interface QuizProviderProps {
    children: ReactNode
}

export const QuizContext = createContext({} as QuizContextData)

export const QuizProvider = ({ children }: QuizProviderProps) => {

    const [response, setResponse] = useState<Response>();
    const [responses, setResponses] = useState<Response[]>([])

    const [question, setQuestion] = useState<Question>();
    const [questions, setQuestions] = useState<Question[]>([]);

    const [quiz, setQuiz] = useState<Quiz>();

    function HandleInsertQuestion() {
        if (question.title === "" || question.title.length < 5) {
            toast.error("Campo 'Pergunta' não pode estar vazio.")
            return;
        }
        setQuestions(questions => [...questions, question])

        HandleClearToNewQuestion();
    }
    function HandleClearToNewQuestion() {
        setQuestions([])
        setResponses([]);
    }

    return (
        <QuizContext.Provider value={{
            quiz,
            question,
            questions,
            response,
            responses,
            setResponse,
            setResponses,
            setQuestion,
            setQuestions,
            setQuiz
        }}>
            <ToastContainer />
            {children}
        </QuizContext.Provider>
    )
}