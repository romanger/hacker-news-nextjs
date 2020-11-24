import Error from 'next/error'
import Link from 'next/link'
import Layout from '../components/Layout'
import StoryList from '../components/StoryList'

const Home = ({ stories, page }) => {
  if (stories.length === 0) {
    return <Error statusCode='503' />
  }

  return (
    <Layout title='Home page | Hacker News Clone'>
      <StoryList stories={stories} />
      <footer>
        {page === 2 &&
          <Link href='/'>
            <a>Prev Page ({page - 1})</a>
          </Link>}

        {page > 2 &&
          <Link href={`/?page=${page - 1}`}>
            <a>Prev Page ({page - 1})</a>
          </Link>}

        <Link href={`/?page=${page + 1}`}>
          <a>Next Page ({page + 1})</a>
        </Link>
      </footer>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  let stories
  let page

  const { req, res, query } = ctx

  try {
    page = Number(query.page) || 1
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
    stories = await res.json()
  } catch (error) {
    console.log(error)
    stories = []
  }
  return { stories, page }
}

export default Home
