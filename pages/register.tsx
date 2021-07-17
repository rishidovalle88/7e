import Head from 'next/head';
import React, { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from 'react';
import Input from '../components/Input';
import Link from 'next/link'
import { PhoneMask, ValidateEmail } from '../Helpers/Validators'
import { useForm, Controller } from "react-hook-form";
import GoHome from '../components/GoHome';
import { GetServerSideProps } from 'next';

interface LoginProps {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string
}

export default function Register() {
    const [userProps, setUserProps] = useState<LoginProps>();
    const [confirmPwd, setConfirmPwd] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const { control, register, handleSubmit } = useForm<LoginProps>();

    function OnChange(e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>) {
        if (e.currentTarget.name === 'phone') {
            PhoneMask(e.currentTarget.value, e)
        }

        if (e.currentTarget.name === 'email') {
            ValidateEmail(e.currentTarget.value, e)
        }

        setUserProps({ ...userProps, [e.currentTarget.name]: e.currentTarget.value })
    }

    function HandleConfirmPwd(e: ChangeEvent<HTMLInputElement>) {

        setConfirmPwd(e.currentTarget.value)

        if (e.currentTarget.value === userProps.password)
            e.currentTarget.style.borderColor = '#35C772';
        else
            e.currentTarget.style.borderColor = 'red';
    }

    async function HandleRegister(e: FormEvent) {
        e.preventDefault();
        setIsLoading(!isLoading);
        console.log(userProps)
    }

    const styles = {
        section: {
            // backgroundColor: '#6C63FF',
            backgroundImage: 'url("./courses_wave_top.svg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: '#F5F5FF',
        }
    }

    return (
        <>
            <Head>
                <title>Cadastro</title>
            </Head>
            {/* {Object.keys(userProps).map((item) => { return (typeof item) })} */}
            <section className="hero is-fullheight" style={styles.section}>
                <GoHome />
                <div className="hero-body">
                    <div className="container">
                        <div className="column is-6 is-offset-3">
                            <div className="box">
                                <header className="m-4">
                                    <h3 className="title has-text-info has-text-centered">Cadastre-se!</h3>
                                </header>
                                <form onSubmit={e => HandleRegister(e)}
                                    className="p-4">
                                    {/* <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: true, maxLength: 10 }}
                                        render={({ field }) =>
                                            <Input
                                                {...field}
                                                type="text"
                                                name="name"
                                                title="Nome"
                                                placeholder="Juan Vicente"
                                            // value={userProps?.name}
                                            // onChange={e => OnChange(e)}
                                            />
                                        }
                                    /> */}
                                    <Input
                                        type="text"
                                        name="name"
                                        title="Nome"
                                        placeholder="Juan Vicente"
                                        value={userProps?.name || ""}
                                        onChange={e => OnChange(e)}
                                    />

                                    <Input
                                        type="email"
                                        name="email"
                                        title="Email"
                                        placeholder="rishi@tst.com"
                                        value={userProps?.email || ""}
                                        onChange={e => OnChange(e)}
                                    />
                                    <Input
                                        type="text"
                                        name="phone"
                                        title="Celular"
                                        placeholder="(11) 91234-4321"
                                        value={userProps?.phone || ""}
                                        onChange={e => OnChange(e)}
                                        onBlur={e => OnChange(e)}
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        title="Digite sua senha"
                                        placeholder="**********"
                                        value={userProps?.password || ""}
                                        onChange={e => OnChange(e)}
                                    />
                                    <Input
                                        type="password"
                                        name="confirmPwd"
                                        title="Confirme a senha"
                                        placeholder="**********"
                                        value={confirmPwd}
                                        onChange={e => HandleConfirmPwd(e)}
                                    />
                                    <button
                                        type="submit"
                                        className={`button is-block is-success is-fullwidth ${isLoading ? "is-loading" : ""}`}>
                                        Cadastrar
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
      props: {
        post: ''
      }
    }
  }