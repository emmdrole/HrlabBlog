import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const TeamsPage= ( { data, location } ) => (
  
    <Layout location={location}>
        <Seo title="Team" keywords={[`gatsby`,'application',`react`]} />
        <h1>Our Team...</h1>
    </Layout>
  
)

export default TeamsPage