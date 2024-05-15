import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const TagsPage = ({ data, location }) => (
  
    <Layout location={location}>
        <Seo title="Tags" keywords={['gatsby','application','react']} />
        <h1>tags</h1>
    </Layout>
  
)

export default TagsPage