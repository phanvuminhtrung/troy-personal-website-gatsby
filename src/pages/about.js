import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image";
import "../components/about.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => (
  <Layout>

      <Seo title="About" />
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="about-page text-white">
          <h2>Just a bit about me only</h2>
          <StaticImage src="../images/troyimage.jpg" alt="am at a hackathon" className="custom-image"/>
          {/* About Section */}
          <section id="about" className="mt-2 mb-2">
            <h4 className="text-decoration-underline">about-me:</h4>
            <p>I'm <span className="name-custom">Troy</span>, but you can call me <span className="name-custom">Troyza</span>!</p>
            <p>I am a Junior Dynamics-365 Developer/Web Developer in Melbourne, Australia, passionate about web technologies.</p>
            <p>I'm dedicated to leveraging Dynamics 365 and the Power Platform to create innovative CRM solutions that drive business impact. Eager to grow and contribute to team success, I'm open to connecting with professionals who share a similar passion for these technologies.</p>
            <p>I admire and value people who actually build tools and contribute to community.</p>
          </section>

           {/* Contact Section */}
          <section id="contact" className="mt-2 mb-2">
            <h4 className="text-decoration-underline">contact-me:</h4>
            <p>If you're interested in working together or just want to say hi, here's how you can reach out to me:</p>
            <ul>
              <li>Email: <a href="mailto:troyphan98@gmail.com" className="custom-a">troyphan98@gmail.com</a></li>
              <li>GitHub: <a href="https://github.com/phanvuminhtrung" target="_blank" rel="noopener noreferrer" className="custom-a">phanvuminhtrung</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/vuphanit/" target="_blank" rel="noopener noreferrer" className="custom-a">Vu (Troy) Phan</a></li>
            </ul>
          </section>

          {/* Next-page Linkl */}
          <div className="text-end w-100 mt-3">
            <Link to="/blog" className="btn btn-outline-warning">get-to-know-my-tech</Link>
          </div>
        </div>
      </div>
    </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
