import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/about.css"

const AboutPage = () => (
  <Layout>
      <Seo title="About" />
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="about-page text-white">
          <h2>just a bit about me only</h2>

          {/* About Section */}
          <section id="about">
          <h4>about-me:</h4>
            <h6>- I'm Troy, but you can call me Troyza!</h6>
            <p>I am a Dynamics-365 Developer/Web Developer in Melbourne, Australia, passionate about web technologies</p>
            <p>I'm dedicated to leveraging Dynamics 365 and the Power Platform to create innovative CRM solutions that drive business impact. Eager to grow and contribute to team success, I'm open to connecting with professionals who share a similar passion for these technologies.</p>
            <p>I admire and value people who actually build tools and contribute to community. One of my favourite inventor is Mark Carrington</p>
          </section>

           {/* Contact Section */}
          <section id="contact">
            <h4>Contact</h4>
            <p>If you're interested in working together or just want to say hi, here's how you can reach out to me:</p>
            <ul>
              <li>Email: <a href="mailto:troyphan98@gmail.com">troyphan98@gmail.com</a></li>
              <li>GitHub: <a href="https://github.com/phanvuminhtrung" target="_blank" rel="noopener noreferrer">phanvuminhtrung</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/vuphanit/" target="_blank" rel="noopener noreferrer">Vu (Troy) Phan</a></li>
            </ul>
          </section>

          {/* Next-page Linkl */}
          <div className="text-end w-100">
            <Link to="/blog" className="btn btn-outline-warning">get-to-know-my-tech</Link>
          </div>
        </div>
      </div>
    </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
