import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import ServicesCommercialAdvice from '../components/ServicesCommercialAdvice'
import ServicesFloatMenu from '../components/ServicesFloatMenu'
import ServicesTrainingInCompany from '../components/ServicesTrainingInCompany'
import styles from './styles.module.css'

const servicos = () => {
    return (
        <Layout title="Serviços">
            <ServicesFloatMenu />
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example">
                <ServicesCommercialAdvice />
                <ServicesTrainingInCompany />
            </div>
        </Layout>
    )
}

export default servicos


export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            post: ''
        }
    }
}