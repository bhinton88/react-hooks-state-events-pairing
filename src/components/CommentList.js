

function CommentList({ comments }) {
  return (
    <div>
      <h3>{comments.length} Comments </h3>
      {comments.map(comment => 
      <div key={comment.id}>
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
      </div>
    )}
    </div>
  )
}

export default CommentList; 