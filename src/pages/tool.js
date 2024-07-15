import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/tool.css"
import { Fade } from 'react-awesome-reveal';

const ToolPage = () => (
  <Layout>
    <Fade>
    <Seo title="Tool" />
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="tool-page">
          <div>
            <h2>Tool</h2>
            {/* Dynamics 365 CRM/Power App tool */}
            <h5>Dynamics365/PowerApp/Dataverse tools</h5>
            <ul>
              <li>XRM ToolBox</li>
              <li>SQL 4 CDS</li>
              <li>Access Sec Roles</li>
              <li>User Security Roles</li>
              <li>EarlyBoundGenerator V1/V2</li>
              <li>FetchXML Builder</li>
              <li>Dataverse REST Builder</li>
              <li>Entity Relation Diagram Creator</li>
              <li>Ribbon Workbench</li>
            </ul>

            {/* Developer management tool */}
            <h5>Developer deployment tools</h5>
            <ul>
              <li>Azure DevOps</li>
              <li>Portal Azure</li>
            </ul>
            
            {/* Developer debug tool */}
            <h5>Developer debug tools</h5>
            <ul>
              <li>Fiddler</li>
              <li>ChromeDev</li>
              <li>WcfClientTest</li>
              <li>PRT</li>
              <li>Ngrok</li>
              <li>Postman</li>
            </ul>

            {/* Developer management tool */}
            <h5>Developer management tools</h5>
            <ul>
              <li>Jira</li>
              <li>Confluence</li>
              <li>Miro</li>
              <li>LastPass</li>
              <li>ClickUp</li>
            </ul>
            
            {/* AI tool */}
            <h5>AI support tools</h5>
            <ul>
              <li><a href="https://chatgpt.com/g/g-s6uoiGq9U-full-stack-framework-assistant" target="_blank">Chat-gpt Custom Bot</a></li>
              <li>Co-pilot</li>
            </ul>
            
            {/* Personal built tool */}
            <h5>Personal built tools</h5>
            <ul>
              <li>Point-poker</li>
              <li>Spinning-wheel</li>
              <li>To-do-list</li>
            </ul>

            {/* Learning and develop */}
            <h5>Learning and developing coding skills</h5>
            <ul>
              <li><a href="https://learn.microsoft.com/en-us/users/vuphanit/" target="_blank">MS learn</a></li>
              <li><a href="https://www.hackerrank.com/" target="_blank">HackerRank</a></li>
              <li>Udemy</li>
              <li>PluralSight</li>
            </ul>
          </div>
          
          {/* Next-page Link */}
          <div className="text-end w-100 mt-5">
            <Link to="/hobby" className="btn btn-outline-warning m-1">discover-my-hobbies</Link>
          </div>
      </div>
    </div>
    </Fade>
  </Layout>
)

export const Head = () => <Seo title="Tool" />

export default ToolPage
