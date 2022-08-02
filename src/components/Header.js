import { useState } from "react"
import CommentList from "./CommentList"

function Header({ video }) {

  const [commentToggle, setCommentToggle] = useState("false")
  const [upVote, setUpVote] = useState(video.upvotes)
  const [downVote, setDownVote] = useState(video.downvotes)

  function handleCommentToggle() {
    setCommentToggle( commentToggle => !commentToggle)
  }

  function handleUpVote() {
    video.upvotes++ 
    setUpVote(video.upvotes)
  }

  function handleDownVote() {
    video.downvotes++
    setDownVote(video.downvotes)
  }


  return (
      <header>
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <button 
          onClick={handleUpVote} 
          type="button" name="upvotes">{upVote}</button>
        <button 
          onClick={handleDownVote} 
          type="button" name="downvotes">{downVote}</button>
        <br/>
        <br/>
        <button 
          onClick={handleCommentToggle}
          type="button" 
          name="toggleComments">{commentToggle ? "Hide Comments" : "Show Comments"}</button>

        {commentToggle ? <CommentList  comments={video.comments} /> : null}
      </header>
      
  )
}

export default Header;