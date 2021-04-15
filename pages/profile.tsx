import Layout from "../components/Layout";
import Account from "../components/Profile/Account";
import Address from "../components/Profile/Address";

export default function Profile() {
    return (
        <Layout>
            <div className="tile">                
                <div className="tile is-parent">
                    <article className="tile is-child">
                        <div className="content">
                            <Address/>
                            <Account />
                        </div>
                    </article>
                </div>
            </div>

        </Layout>

    )
}

