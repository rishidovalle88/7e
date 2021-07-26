import { useState } from 'react'
import BlockAbout from '../components/BlockAbout'
import BlockServices from '../components/BlockServices'
import BlockWorkshop from '../components/BlockWorkshop'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'
import BlockForm from '../components/BlockForm'
import { GetServerSideProps } from 'next'


export default function Home({post}) {

  const [cursos] = useState([1, 2, 3])


  return (
    <Layout title="Home">
      <div className={styles.home}>
        <BlockAbout />
        <BlockServices />
        <BlockWorkshop />
        <BlockForm/>                
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      post: ''
    }
  }
}
