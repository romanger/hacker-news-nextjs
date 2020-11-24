import Error from 'next/error'
import Layout from '../components/Layout'
import CommentList from '../components/CommentList'

const Story = ({ story }) => {
  if (!story) {
    return <Error statusCode='503' />
  }

  return (
    <Layout title={`${story.title} | Hacker News Clone`} backButton='true'>
      <main className='single-story'>
        <h1 className='single-story__title'><a href={story.url}>{story.title}</a></h1>
        <div className='single-story__details'>
          <strong>{story.points || 0} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </div>
        {story.comments.length > 0
          ? <CommentList comments={story.comments} />
          : <div className='no-comments'>No comments for this story</div>}
      </main>
    </Layout>
  )
}

Story.getInitialProps = async (ctx) => {
  const { req, res, query } = ctx
  const storyId = query.id
  let story

  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    story = await res.json()
  } catch (error) {
    console.log(error)
    story = null
  }
  return { story }
}
export default Story
