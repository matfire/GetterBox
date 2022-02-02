import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className='h-screen w-full flex flex-col'>
      <Head>
        <title>GetterBox</title>
      </Head>
      <main>
        <Component {...pageProps} data-theme="dark" />
      </main>
      <footer>
        &copy; {new Date().getFullYear()} GetterBox
      </footer>
    </div>
  )

}

export default MyApp
