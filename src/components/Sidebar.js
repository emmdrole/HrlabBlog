import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar-Container'>

    <div className='advertisement'>
        <h4>Advertisement</h4>
        <img src='https://via.placeholder.com/320x200' alt='Add' style={{width: "100%"}}></img>
    </div>

    <div className='upcoming-fairs'>
        
        <h4 className='fairs-upcoming'>Upcoming Fairs</h4>
        
        <StaticQuery query={sidebarQuery} render={(data) =>(
            <div>
                {data.allMarkdownRemark.edges.map(({node})=>(
                    <div className='title-date' key={node.id}>
                        <Link className='link'  to={node.fields.slug}>
                        <span className='dashed-border' > {node.frontmatter.title} - {node.frontmatter.date}</span>
                        </Link>
                    </div>
                ))}
            </div>
        )}/>
    </div>
    </div>
    </>
  )
}

const sidebarQuery = graphql`
query sidebarQuery {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
    ) {
        edges {
            node {
                id
                frontmatter {
                    title
                    date
                    
                }
                fields{
                    slug
                }
            }
        }
    }
}
`
export default Sidebar