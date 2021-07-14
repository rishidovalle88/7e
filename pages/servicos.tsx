import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import ServiceApresentation from '../components/ServiceApresentation'
import ServicesCommercialAdvice from '../components/ServicesCommercialAdvice'
import ServicesFloatMenu from '../components/ServicesFloatMenu'
import ServicesTrainingInCompany from '../components/ServicesTrainingInCompany'

const Servicos = () => {
    return (
        <Layout title="Serviços">
            <ServiceApresentation />

            <ServicesFloatMenu />
            {/* <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example">
                <ServicesCommercialAdvice />
                <ServicesTrainingInCompany />
            </div> */}

        </Layout>
    )
}

export default Servicos


export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            post: ''
        }
    }
}