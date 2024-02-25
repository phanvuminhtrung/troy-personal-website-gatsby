import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <div className="about-page">
    <Layout>
      <Seo title="About" />
      <h1>Welcome to My Personal Page!</h1>
      <p>This is a little about me and my work.</p>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <h4>Welcome to my website, I'm Troy, but you can call me Troyza!</h4>
        <p>I am a Junior Dynamics 365 Developer at EngageRM in Melbourne, Australia, passionate about the Dynamics 365 ecosystem and Power Platform. My current focus is on expanding my technical expertise in C#, Web API, and Web App development.</p>
        <p>I'm dedicated to leveraging Dynamics 365 and the Power Platform to create innovative CRM solutions that drive business impact. Eager to grow and contribute to team success, I'm open to connecting with professionals who share a similar passion for these technologies.</p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>If you're interested in working together or just want to say hi, here's how you can reach out to me:</p>
        <ul>
          <li>Email: <a href="mailto:troyphan98@gmail.com">troyphan98@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/phanvuminhtrung" target="_blank" rel="noopener noreferrer">phanvuminhtrung</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/vuphanit/" target="_blank" rel="noopener noreferrer">Vu (Troy) Phan</a></li>
        </ul>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <h2>Portfolio</h2>
        <p>Here are some of the fun projects I've worked on:</p>
        <ul>
          <li><strong>Project 1</strong> - Personal-site built by GatsbyJs</li>
          <li><strong>Project 2</strong> - Terminal-site for oldskool enthusiastic</li>
          <li><strong>Project 3</strong> - Spinning-wheel js to help you make decision</li>
          <li><strong>Project 4</strong> - To-do-list tool</li>
          <li><strong>Project 4</strong> - Point-poker teams app to help your team leverage the work</li>
        </ul>
      </section>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
)

export const Head = () => <Seo title="About" />

export default SecondPage
