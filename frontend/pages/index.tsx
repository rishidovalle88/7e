import { useState } from 'react'
import BlockAbout from '../components/BlockAbout'
import BlockServices from '../components/BlockServices'
import BlockWorkshop from '../components/BlockWorkshop'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'
import BlockForm from '../components/BlockForm'
import BlockContact from '../components/BlockContact'

export default function Home() {

  const [cursos] = useState([1, 2, 3])


  return (
    <Layout title="Home">
      <div className={styles.home}>
        <BlockAbout />
        <BlockServices />
        <BlockWorkshop />
        <BlockForm/>
        <BlockContact />
      </div>
    </Layout>
  )
}
