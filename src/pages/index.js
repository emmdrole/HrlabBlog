import * as React from "react"
import { graphql,StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"

// TODO: Finish this component. You can also destructure props if you want to.
const BlogIndex = ({ data, location }) => {
  

  return (
    <Layout location={location} >
      <div className="blogsMenu">
        <div className="centered">
        {/* <h1 className="main-title">All Fairs</h1> */}
        </div>
        <StaticQuery query={indexQuery} render={data => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post 
          key={node.id}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          slug={node.fields.slug}
          date = {node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
         />
      ))}
    </div>
    
  )
}} />

      <div className="sidebar">
        <Sidebar />
      </div>

      </div>
      
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

// TODO: You need to extend the query for relevant data attributes.
// export const pageQuery = graphql`
//   {
//     site {
//       siteMetadata {
//         title

       
//       }
//     }
//   }
// `


const indexQuery = graphql` 
query{
  allMarkdownRemark(sort: { fields: [frontmatter___date],order: DESC}){ 
    edges{
      node{
        id
        frontmatter{
          title
          date
          author
          tags
          
          
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`