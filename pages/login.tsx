import Head from 'next/head';
import React, { ChangeEvent, useState } from 'react';
import Input from '../components/Input';
import Link from 'next/link'

interface LoginProps {
    username: string;
    password: string;
}

export default function Login(props: LoginProps) {
    const [userProps, setUserProps] = useState<LoginProps>();

    function OnChange(e: ChangeEvent<HTMLInputElement>) {
        setUserProps({ ...userProps, [e.currentTarget.name]: e.currentTarget.value })
    }

    const styles = {
        section: {
            // backgroundColor: '#6C63FF',
            backgroundImage: 'url("./courses_wave_top.svg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: '#F5F5FF',
        },
        goHome: {
            margin: '20px',
            color: '#6C63FF',
        }
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>           

            <section className="hero is-fullheight" style={styles.section}>
            <Link href="/">
                <a style={styles.goHome}>
                    <span>
                        Ir para a página inicial
                    </span>
                </a>
            </Link>
                <div className="hero-body">
                    <div className="container">
                        <div className="column is-6 is-offset-3">
                            <div className="box">
                                <header className="m-4">
                                    <h3 className="title has-text-info has-text-centered">Entre!</h3>
                                </header>


                                <form className="p-4">
                                    <Input
                                        type="text"
                                        name="username"
                                        title="Digite seu usuário"
                                        placeholder="rishi@tst.com"
                                        value={props.username}
                                        onChange={e => OnChange(e)}
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        title="Digite sua senha"
                                        placeholder="**********"
                                        value={props.password}
                                        onChange={e => OnChange(e)}
                                    />
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox" />
                                        &nbsp; Lembre de mim
                                    </label>
                                    </div>
                                    <button className="button is-block is-success is-fullwidth">Entrar <i className="fa fa-sign-in" aria-hidden="true" /></button>
                                </form>
                                <p className="has-text-grey has-text-centered">
                                    <a href="../">Cadastre-se</a> &nbsp;·&nbsp;
                            <a href="../">Esqueci minha senha</a>

                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
