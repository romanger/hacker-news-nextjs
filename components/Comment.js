const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <div className='comment__user'>{comment.user}</div>
      <div className='commnet__content' dangerouslySetInnerHTML={{ __html: comment.content }} />

      {comment.comments && (
        <div className='comment__nested-comments'>
          {comment.comments.map((nestedComment) => (
            <Comment key={nestedComment.id} comment={nestedComment} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Comment
