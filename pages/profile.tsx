import Head from "next/head";
import Layout from "../components/Layout";
import Account from "../components/Profile/Account";
import Address from "../components/Profile/Address";
import { ProfileProvider } from "../contexts/ProfileContext";

export default function Profile() {
    return (
        <Layout title="Minha conta">
            <ProfileProvider>
                <section className="section">
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
                </section>
            </ProfileProvider>
        </Layout>

    )
}

