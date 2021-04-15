import Head from 'next/head'
import { useState } from 'react'
import Card from '../components/Card/Card'
import CardHome from '../components/CardHome'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [cursos] = useState([1,2,3])

  const styles = {
    searchCourses: {
      section: {
        backgroundImage: 'url("./home_career.svg"), url("./courses_wave_top.svg")',
        backgroundPosition: 'center, bottom',
        backgroundRepeat: 'no-repeat'
      },
      box: {
        opacity: '.99'
      }
    },
    courses: {
      // backgroundColor: '#6C63FF',
      backgroundImage: 'url("./courses_wave.svg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: '#F5F5FF',
    },

    h1: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '1rem',
      marginTop: '0.5rem',
      marginBottom: '0.9rem',
    },
  }


  return (
    <>
      <Header />
      
      <main>
        <section className="hero is-large"
          style={styles.searchCourses.section}
        >
          <div className="hero-body is-mobile">
            <div className="container has-text-centered">
              <div className="box" style={styles.searchCourses.box}>
                <h2 className="title">Busque seu curso</h2>
                <div className="field">
                  <input
                    className="input is-large  has-text-centered"
                    type="text"
                    placeholder="Marketing..."></input>
                </div>
                <div className="field">
                  <button className="button is-large">
                    <span className="icon is-medium">
                      <i className="fas fa-search"></i>
                    </span>
                    <span>Buscar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={styles.courses}>
          <div className="container">
            <h1 style={styles.h1}>Cursos em destaque</h1>
            <h2 style={styles.h2}>
              Estes são os cursos que as pessoas estão mais procurando no momento
          </h2>
            <div className="columns is-multiline is-desktop is-centered">
              {cursos.map(() => {
                return (
                  <div className="column">
                    <CardHome />
                  </div>
                )
              })}

            </div>
          </div>
        </section>

        <Footer />
      </main>



    </>
  )
}
