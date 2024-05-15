import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const post = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const htmlContent = data.markdownRemark.html
  return (
    <>
    <Layout>
      <Seo title={post.title} />
      <div className='read-more-container'>
      <h1 className='read-more-titles'>{post.title}</h1>
      <span className='read-more-meta'><b>{post.date} by {post.author}</b></span>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> {/* Render HTML content */}
      </div>
      
    </Layout>
    </>
  )
}

export const postQuery =graphql`
 query blogPostBySlug($slug: String!){
    markdownRemark(fields: { slug: {eq: $slug}}){
      id
      html
      frontmatter{
        title
        author
        date
        tags
      }
      
    }
 }
`

export default post







// import * as React from "react"
// import { graphql } from "gatsby"
// import Layout from "../../components/layout"
// import Seo from "../../components/seo"

// // TODO: Finish this component. You can also destructure props if you want to.
// const BlogPostTemplate = ({ data }) => {
//   const post = data.markdownRemark.frontmatter
//   return (
//     <Layout >
//       <Seo title={post.title} />
//       <h1>{post.title}</h1>
//       <span>{post.date} by {post.author}</span>
//       <div></div>
//     </Layout>
//   )
// }

// // TODO: You need to extend the query for relevant data attributes.
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(fields: { path:{ eq: $slug}}){
//       id
//       html
//       frontmatter{
//         title
//         author
//         date
//         tags
//       }
//     }
//   }
// `
// export default BlogPostTemplate

