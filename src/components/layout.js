// This is the layout component that wraps around all pages. It includes the header and footer components, and the main content of the page.
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="flex-grow-1">{children}</main>
        <Footer className="mt-auto"/>
      </div>
    </>
  )
}


export default Layout
