import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/tool.css"

const ToolPage = () => (
  <Layout>
    <div className="tool-page">
      <Seo title="BucketList" />
        <div>
          <h2>Tool</h2>
          <ul>
            <li>Item 1: SQL 4 CDS</li>
            <li>Item 2: Fiddler?</li>
            <li>Item 3: Ngrok</li>
          </ul>
        </div>
        <div className="text-end w-100 mt-5">
          <Link to="/" className="btn btn-outline-warning">back-home</Link>
        </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Tool" />

export default ToolPage
