import Head from 'next/head'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <Head>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
