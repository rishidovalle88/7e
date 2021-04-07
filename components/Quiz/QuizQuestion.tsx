import React, { ChangeEvent, useContext, useState } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import QuizResponse from './QuizResponse'
import Button from '../Button'
import { Question } from '../../models/Quiz'
import Divider from '../Divider'
import { toast } from 'react-toastify';
import Modal from '../Modal'
import Input from '../Input'
import linq from 'linq'
import Enumerable from 'linq'

const QuizQuestion = () => {
    const { question, questions, response, responses, setResponses, setQuestion, setQuestions } = useContext(QuizContext)
    const [isEdit, setIsEdit] = useState(false)
    const [questionToRemove, setQuestionToRemove] = useState<Question>()
    const [isRemoveQuestion, setIsRemoveQuestion] = useState(false)


    function HandleSetQuestion(e: ChangeEvent<HTMLInputElement>) {
        setQuestion({ ...question, [e.currentTarget.name]: e.currentTarget.value })
    }

    function HandleUpdateQuestion() {

        if (!HandleValidateQuestion(true)) return;

        let index = questions.findIndex(f => f.id === question.id)
        console.log(question.id, index)
        let _questions = [...questions]
        _questions[index] = {
            ..._questions[index],
            title: question.title,
            responses: responses
        }
        setQuestions(_questions)

        index == 0 ? toast.success("Questão atualizada") : toast.error("Não foi possível realizar a atualização");

    }

    function HandleInsertNewQuestion() {
        if (!HandleValidateQuestion()) return;
        setQuestions(questions => [...questions, { id: questions.length + 1, title: question.title, responses: responses }])

        HandleClearToNewQuestion()
    }

    function HandleGetQuestion(_question: Question) {
        setIsEdit(true);
        setQuestion(_question)
        setResponses(_question.responses)
    }

    function HandleIsRemoveQuestion(quest: Question) {
        setQuestionToRemove(quest)
        setIsRemoveQuestion(true)
    }

    function HandleRemoveQuestion(quest: Question) {
        const removeQuestion = questions.filter(item => item !== quest);
        setQuestions(removeQuestion);
        HandleClearToNewQuestion()
        setIsRemoveQuestion(false)
    }

    function HandleNewQuestion() {
        setIsEdit(false)
        HandleClearToNewQuestion()
    }

    function HandleClearToNewQuestion() {
        setQuestion({ ...question, title: "", responses: [] })
        setResponses([])
    }

    function HandleValidateQuestion(isUpdate: boolean = false) {

        if (isUpdate) {
            var duplicateTitle = Enumerable.from(questions).where(q => q.title === question.title).count()
            if (duplicateTitle > 0) {
                toast.error("Já existe uma questão com este mesmo titulo")
                return false;
            }
        }
        if (question?.title === "" || question?.title.length < 5) {
            toast.error("Campo 'Pergunta' não pode estar vazio.")
            return false;
        }

        return true;
    }

    return (
        <>
            <Modal
                typeModel="danger"
                activateModal={isRemoveQuestion ? "is-active" : ""}
                btnLabel="Confirmar"
                btnType="is-danger"
                fn={() => HandleRemoveQuestion(questionToRemove)}
                fnClose={() => setIsRemoveQuestion(false)}
                title="Remover questão!"
            >
                <h1>Tem certeza que deseja remover a questão: <strong>{questionToRemove?.title}</strong></h1>
            </Modal>

            <div className="container mt-3">
                <div className="box">
                    <Input
                        title="Pergunta"
                        name="title"
                        placeholder="Como sua vida esta neste momento?"
                        styleW="is-12"
                        value={question?.title || ""}
                        onChange={e => { HandleSetQuestion(e) }}
                    />
                </div>
            </div>

            <QuizResponse />

            {isEdit ?
                <div className="container mt-3">
                    <div className="box">
                        <div className="columns is-mobile is-multiline">
                            <Button
                                isLoading={false}
                                styleW="is-12"
                                label="Editar questão"
                                onClick={e => HandleUpdateQuestion()}
                            />

                            <Button
                                isLoading={false}
                                styleW="is-12"
                                label="Adicionar nova questão"
                                styleButton="is-info"
                                onClick={e => HandleNewQuestion()}
                            />
                        </div>
                    </div>
                </div>
                :
                <div className="container mt-3">
                    <div className="box">
                        <div className="columns is-mobile is-multiline">
                            <Button
                                isLoading={false}
                                styleW="is-12"
                                label="Adicionar questão"
                                onClick={e => HandleInsertNewQuestion()}
                            />
                        </div>
                    </div>
                </div>
            }

            <Divider />

            <div className="container mt-3">
                <nav className="panel">
                    <p className="panel-heading">
                        Questões
                    </p>
                    {questions.length === 0 && (
                        <a className="panel-block">
                            <h1>Nenhum resultado encontrado</h1>
                        </a>

                    )}
                    {questions.map((item, index) => {
                        return (
                            <div className="panel-block" key={index}>
                                <a className="panel-block"
                                    onClick={e => HandleGetQuestion(item)}
                                >
                                    <span className="panel-icon">
                                        <i className="fas fa-book" aria-hidden="true" />
                                    </span>
                                    {item?.title}
                                </a>
                                <a
                                    onClick={e => {
                                        HandleIsRemoveQuestion(item)
                                    }}
                                    title="Excluir questão">
                                    <i className="fa fa-trash" aria-hidden="true">
                                    </i>
                                </a>
                            </div>

                        )
                    })}

                </nav>

            </div>
        </>
    )
}

export default QuizQuestion
