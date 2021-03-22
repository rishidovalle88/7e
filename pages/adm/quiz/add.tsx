import React, { ChangeEvent, MouseEvent, useState } from 'react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Layout from '../../../components/Layout'
import Switch from '../../../components/Switch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Divider from '../../../components/Divider'
import Modal from '../../../components/Modal'


interface Response {
    id: number;
    title: string;
    isCorrect: boolean;
}

interface Question {
    idx?: number;
    id: number;
    question: string;
    responses: Response[]
}

interface Quiz {
    title: string;
    questions: Question[]
}


const QuizAdd = () => {
    const [isCorrect, setIsCorrect] = useState(false)
    const [responseTitle, setResponseTitle] = useState("")
    const [responses, setResponses] = useState<Response[]>([]);

    const [questionTitle, setQuestionTitle] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [questionToUpdate, setQuestionToUpdate] = useState<Question>()
    const [questionToRemove, setQuestionToRemove] = useState<Question>()
    const [isRemoveQuestion, setIsRemoveQuestion] = useState(false)

    const [quiz, setQuiz] = useState<Quiz>()

    const [isEdit, setIsEdit] = useState(false)

    function HandleRemoveResponse(resp: Response) {
        const removeResp = responses.filter(item => item !== resp);
        setResponses(removeResp);
    }

    function HandleInsertResponse(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        if (!responseTitle) {
            toast.error("Necessário preenchimento da resposta");
            return;
        }

        setResponses(responses => [...responses,
        {
            id: 0,
            title: responseTitle,
            isCorrect: isCorrect
        }
        ])

        setResponseTitle("");
        setIsCorrect(false)
    }

    function HandleInsertNewQuestion() {
        if (questionTitle === "") {
            toast.error("Campo 'Pergunta' não pode estar vazio.")
            return;
        }
        setQuestions(questions => [...questions, {
            id: 0,
            question: questionTitle ? questionTitle : "",
            responses: responses
        }])

        // setQuiz({questions : questions})

        HandleClearToNewQuestion()
    }

    function HandleUpdateQuestion() {

        let index = questions.findIndex(f => f.id === questionToUpdate.id)
        let _questions = [...questions]
        _questions[index] = {
            ..._questions[index],
            question: questionTitle,
            responses: responses
        }
        setQuestions(_questions)

        toast.success("Questão atualizada")
    }

    function HandleGetQuestion(_question: Question) {
        setIsEdit(true);
        setQuestionTitle(_question.question)
        setResponses(_question.responses)

        setQuestionToUpdate({
            ...questionToUpdate,
            id: _question.id,
            question: _question.question,
            responses: _question.responses
        })
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
        setQuestionTitle("")
        setResponses([])
    }

    function HandleSaveQuiz() {
        if (questions.length === 0) {
            toast.error("Necessário cadastrar uma ou mais questões.")
            return;
        }
        setQuiz({ ...quiz, questions: questions })
        console.log(quiz)
    }

    return (
        <Layout>
            <ToastContainer />

            <Modal
                typeModel="danger"
                activateModal={isRemoveQuestion ? "is-active" : ""}
                btnLabel="Confirmar"
                btnType="is-danger"
                fn={() => HandleRemoveQuestion(questionToRemove)}
                fnClose={() => setIsRemoveQuestion(false)}
                title="Remover questão!"
            >
                <h1>Tem certeza que deseja remover a questão: <strong>{questionToRemove?.question}</strong></h1>
            </Modal>



            <section className="section">
                <h1 className="title">Adicionar quiz</h1>
                <h2 className="subtitle">
                    O primeiro passo é adicionar o <strong>tema</strong> do quiz, após, para cada pergunta, adicionar questões a serem respondidas.
                </h2>
            </section>
            <div className="container">
                <div className="box">
                    <Input
                        title={"Tema do quiz"}
                        name={quiz?.title}
                        placeholder="Para você, o que é sucesso?"
                        onChange={e => setQuiz({ ...quiz, title: e.currentTarget.value })}
                    />
                </div>
            </div>

            <div className="container mt-3">
                <div className="box">
                    <div className="columns is-mobile is-multiline">
                        <Input
                            title="Pergunta"
                            name="questionTitle"
                            placeholder="Como sua vida esta neste momento?"
                            styleW="is-12"
                            value={questionTitle}
                            onChange={e => setQuestionTitle(e.currentTarget.value)}
                        />
                        <Switch
                            readOnly
                            checked={isCorrect}
                            styleW="is-1"
                            name="isCorrect"
                            title=""
                            onClick={e => setIsCorrect(!isCorrect)}
                        />
                        <Input
                            title=""
                            name="title"
                            placeholder="Resposta"
                            styleW="is-7"
                            value={responseTitle || ""}
                            onChange={e => setResponseTitle(e.currentTarget.value)}
                        />
                        <Button
                            isLoading={false}
                            styleW="is-4"
                            label="Adicionar"
                            onClick={e => HandleInsertResponse(e)}
                        />


                    </div>

                    <hr />


                    {responses.map((item, index) => {
                        return (
                            <div className="columns is-mobile is-multiline is-centered" key={index}>
                                <Switch
                                    readOnly
                                    checked={item.isCorrect || false}
                                    styleW="is-1"
                                    name=""
                                    title=""
                                />
                                <Input
                                    disabled
                                    title=""
                                    name="title"
                                    placeholder="Resposta"
                                    styleW="is-7"
                                    value={item?.title || ""}
                                />
                                <Button
                                    isLoading={false}
                                    styleW="is-4"
                                    styleButton="is-danger"
                                    label="Remover"
                                    onClick={e => HandleRemoveResponse(item)}
                                />
                            </div>
                        )
                    })}


                </div>
            </div>



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
                            <div className="panel-block">
                                <a className="panel-block"
                                    key={index}
                                    onClick={e => HandleGetQuestion(item)}
                                >
                                    <span className="panel-icon">
                                        <i className="fas fa-book" aria-hidden="true" />
                                    </span>
                                    {item.question}
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

            <div className="container mt-3">
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

        </Layout>
    )
}

export default QuizAdd
