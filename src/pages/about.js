import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = ({ data, location }) => {
    
    return(
    <Layout location={location} >
        <Seo  keywords={[`gatsby`,'application',`react`]} />
        
    </Layout>
    )
  
}

export default AboutPage