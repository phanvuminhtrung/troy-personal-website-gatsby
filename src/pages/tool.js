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
            {/* Dynamics 365 CRM/Power App tool */}
            <h5>Dynamics 365 CRM/Power App tool</h5>
            <ul>
              <li>XRM ToolBox</li>
              <li>SQL 4 CDS</li>
              <li>Access sec roles</li>
              <li>EarlyBoundGenerator</li>
              <li>FetchXml builder</li>
              <li>Rest builder</li>
              <li>Plugin Registration Tool</li>
            </ul>
            
            {/* Developer debug tool */}
            <h5>Developer debug tool</h5>
            <ul>
              <li>Fiddler</li>
              <li>WcfClientTest</li>
              <li>PRT</li>
              <li>Ngrok</li>
              <li>ChromeDev</li>
            </ul>
            
            {/* AI tool */}
            <h5>AI tool</h5>
            <ul>
              <li>Chatgpt</li>
              <li>Co-pilot</li>
              <li>Localhost AI</li>
            </ul>
            
            {/* Personal built tool */}
            <h5>Personal built tool</h5>
            <ul>
              <li>Make decisions by spinning wheel</li>
              <li>To-do-list</li>
              <li>Ter</li>
              <li>Planning Poker</li>
            </ul>

            {/* Learning and develop knowledge */}
            <h5>Learning and develop knowledge</h5>
            <ul>
              <li>MS learn</li>
              <li>Udemy</li>
              <li>PluralSight</li>
              <li>Leetcode</li>
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
