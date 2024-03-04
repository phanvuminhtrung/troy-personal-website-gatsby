import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/tool.css"
import { Fade } from 'react-awesome-reveal';

const ToolPage = () => (
  <Layout>
    <Fade>
    <Seo title="BucketList" />
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="tool-page">
          <div>
            <h2>Tool</h2>
            <ul>
              <li>Item 1: SQL 4 CDS</li>
              <li>Item 2: Fiddler?</li>
              <li>Item 3: Ngrok</li>
            </ul>
          </div>
          
          {/* Next-page Link */}
          <div className="text-end w-100 mt-5">
            <Link to="/" className="btn btn-outline-warning m-1">back-home</Link>
          </div>
      </div>
    </div>
    </Fade>
  </Layout>
)

export const Head = () => <Seo title="Tool" />

export default ToolPage
