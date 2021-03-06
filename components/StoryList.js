import Link from 'next/link'

const StoryList = ({ stories }) => (
  <div className='story-list'>
    {stories.map(story => {
      return (
        <div className='story' key={story.id}>
          <h2 className='story-title'>
            <a target='_blank' rel='noreferrer' href={story.url}>{story.title}</a>
          </h2>
          <div className='story-details'>
            <span>{story.points || 0} points</span>
            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      )
    })}
  </div>
)

export default StoryList
