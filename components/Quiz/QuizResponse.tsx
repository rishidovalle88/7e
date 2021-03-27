import React, { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { QuizContext } from '../../pages/contexts/QuizContext'
import Button from '../Button'
import Input from '../Input'
import Switch from '../Switch'
import { Response } from '../../models/Quiz'
import { toast } from 'react-toastify';

const QuizResponse = () => {
    const { question, response, responses, setResponse, setResponses } = useContext(QuizContext)

    const [isCorrect, setIsCorrect] = useState(false);

    function HandleInsertResponse(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        
        let responseExist = responses.findIndex(r => r.title === response.title);

        if(responseExist > -1){
            toast.error("Já há uma resposta com esta descrição");
            return;
        }

        if (!response?.title) {
            toast.error("Necessário preenchimento da resposta");
            return;
        }
        setResponses(responses => [...responses, response])
        HandleClearToNewResponse();
    }

    function HandleClearToNewResponse() {
        const _response: Response = { id: 0, title: "", isCorrect: false }
        setResponse(_response)
    }

    function HandleRemoveResponse(resp: Response) {
        const removeResp = responses.filter(item => item !== resp);
        setResponses(removeResp);
    }

    return (
        <div className="container mt-3">
            <div className="box">
                <div className="columns is-mobile is-multiline">                    
                    <Switch
                        readOnly
                        checked={response?.isCorrect || false}
                        styleW="is-1"
                        name="isCorrect"
                        title=""
                        onChange={e => {
                            setResponse({ ...response, isCorrect: !isCorrect })
                            setIsCorrect(!isCorrect)
                        }}
                    />
                    <Input
                        title=""
                        name="title"
                        placeholder="Resposta"
                        styleW="is-7"
                        value={response?.title || ""}
                        onChange={e => { setResponse({ ...response, title: e.currentTarget.value }) }}
                    />
                    <Button
                        isLoading={false}
                        styleW="is-4"
                        label="Adicionar"
                        onClick={e => HandleInsertResponse(e)}
                    />


                </div>

                {responses.length > 0 ? <hr /> : "" }        

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
    )
}

export default QuizResponse
