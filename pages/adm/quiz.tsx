import React, { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Switch from '../../components/Switch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Divider from '../../components/Divider'
import Modal from '../../components/Modal'
import { QuizContext, QuizProvider } from '../contexts/QuizContext'
import QuizResponse from '../../components/Quiz/QuizResponse'
import QuizQuestion from '../../components/Quiz/QuizQuestion'
import QuizMain from '../../components/Quiz/QuizMain'


const QuizAdd = () => {

    return (
        <Layout>
            <ToastContainer />
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
