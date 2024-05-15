import * as React from "react"
import { Link } from "gatsby"
import HrLogo from '../images/Hrlab.svg'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location?.pathname === rootPath
 

  

 
  return (
   <>
  <div>
   <div className="global-wrapper" data-is-root-path={isRootPath}>
   <nav className="menuList">
    <li className="li1"><Link to="/">Home</Link></li>
    <li className="li1"><Link to="/about">About</Link></li>
    <li className="li1"><Link to="/team">Teams</Link></li>
    <li className="li1"><Link to="/tags">Tags</Link></li>
   </nav>
   <img className="imageHrlab" src={HrLogo} alt="logo"></img>
   </div>
   <div className="children-wrapper">
    {children}
   
   </div>

  
  </div> 
   
  
   </>
  )
}

export default Layout
