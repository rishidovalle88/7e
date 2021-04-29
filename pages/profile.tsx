import Head from "next/head";
import Layout from "../components/Layout";
import Account from "../components/Profile/Account";
import Address from "../components/Profile/Address";
import { ProfileProvider } from "../contexts/ProfileContext";

export default function Profile() {
    return (
        <Layout>
            <Head>
                <title>Minha conta</title>
            </Head>
            <ProfileProvider>
                <div className="tile">
                    <div className="tile is-parent">
                        <article className="tile is-child">
                            <div className="content">
                                <Address />
                                <Account />
                            </div>
                        </article>
                    </div>
                </div>
            </ProfileProvider>
        </Layout>

    )
}

