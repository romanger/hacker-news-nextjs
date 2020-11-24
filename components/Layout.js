import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div className='container'>
      <nav>
        <Link href='/'>
          <a>
            <span className='main-title'>Hacker News Clone</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
  </div>
)

export default Layout
