import React from 'react'
import Layout from '../../components/Layout'
import { QuizProvider } from '../../contexts/QuizContext'
import QuizMain from '../../components/Quiz/QuizMain'

const QuizAdd = () => {

    return (
        <Layout>
            <QuizProvider>
                <section className="section">
                    <h1 className="title">Adicionar quiz</h1>
                    <h2 className="subtitle">
                        O primeiro passo é adicionar o <strong>tema</strong> do quiz, após, para cada pergunta, adicionar questões a serem respondidas.
                </h2>
                </section>
                <QuizMain/>
            </QuizProvider>
        </Layout>
    )
}

export default QuizAdd
