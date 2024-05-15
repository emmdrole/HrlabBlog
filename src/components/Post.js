import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Post = ({ title,author,slug,date,body }) => {
  useEffect(() =>{
    Aos.init();
  },[])
  return (
    <div>
       <div className='post-container' data-aos="fade-up">
        <h1 className='title-post'>{title}</h1>
        <span className='meta-info'>{date} by {author}</span> 
        <div className='smaller'><p className='smaller-space'>{body}</p></div>
        <Link className="btn-more" to={slug}><b>Read More</b></Link>
       </div> 
    </div>
  )
}

export default Post