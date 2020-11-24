import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='manifest' href='/static/manifest.json' />

        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='application-name' content='hacker-news-clone' />
        <meta name='apple-mobile-web-app-title' content='hacker-news-clone' />
        <meta name='theme-color' content='#ff6600' />
        <meta name='msapplication-navbutton-color' content='#ff6600' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='msapplication-starturl' content='/' />

        <link rel='icon' href='/static/icons/icon-512x512.png' />
        <link rel='apple-touch-icon' href='/static/icons/icon-512x512.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
