import React, { useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import Button from '../Button'
import Input from '../Input'
import QuizQuestion from './QuizQuestion'
import { toast } from 'react-toastify';

const QuizMain = () => {

    const { quiz, setQuiz, questions } = useContext(QuizContext)

    function HandleSaveQuiz() {
        if (questions.length === 0) {
            toast.error("Necessário cadastrar uma ou mais questões.")
            return;
        }
        setQuiz({ ...quiz, questions: questions })
        console.log(quiz)
    }
    return (
        <>
            <div className="container">
                <div className="box">
                    <Input
                            title={"Tema do quiz"}
                            name={quiz?.title || ""}
                            placeholder="Para você, o que é sucesso?"
                            onChange={e => setQuiz({ ...quiz, title: e.currentTarget.value })}
                        />
                </div>
            </div>

            <QuizQuestion />

            <div className="container mt-3 mb-3">
                <div className="box">
                    <div className="columns is-mobile is-multiline">
                        <Button
                            isLoading={false}
                            styleW="is-12"
                            label="Salvar quiz"
                            onClick={e => HandleSaveQuiz()}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizMain
