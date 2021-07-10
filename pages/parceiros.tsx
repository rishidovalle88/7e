import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import PartnerBlockOne from '../components/PartnerBlockOne'
import PartnerBlockThree from '../components/PartnerBlockThree'
import PartnerBlockTwo from '../components/PartnerBlockTwo'

const Parceiros = () => {
    return (
        <Layout title="Parceiros">
            <PartnerBlockOne />
            <PartnerBlockTwo />
            <PartnerBlockThree />
        </Layout>
    )
}

export default Parceiros

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            post: ''
        }
    }
}