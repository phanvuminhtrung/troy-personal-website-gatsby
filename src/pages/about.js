import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image";
import "../components/about.css"
import { Fade } from 'react-awesome-reveal';

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Fade>
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="about-page text-white">
          <h2>Just a bit about me only</h2>
          <StaticImage src="../images/troyimage.jpg" alt="am at a hackathon" className="custom-image"/>
          
          {/* About Section */}
          <section id="about" className="mt-2 mb-2">
            <h4 className="text-decoration-underline">about-me:</h4>
            <p>I'm <span className="name-custom">Troy</span>, but you can call me <span className="name-custom">Troyza</span>!</p>
            <p>I am a Dynamics-365 Developer/Web Developer in Melbourne, Australia, passionate about web technologies.</p>
            <p>I'm dedicated to leveraging Dynamics 365 and the Power Platform to create innovative CRM solutions that drive business impact. Eager to grow and contribute to team success, I'm open to connecting with professionals who share a similar passion for these technologies.</p>
          </section>

          {/* About Section */}
          <section id="certificate" className="mt-2 mb-4">
            <h4 className="text-decoration-underline">achievements:</h4>
            <p>These are some of my recent certifications:</p>
            <div className="badges-container">
              <a href="https://learn.microsoft.com/en-us/users/vuphanit/credentials/7d963bc1bdf46dfc?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/powerplatform-developer-cert.png" alt="developer pl-400" className="badges" />
              </a>
              {/* <a href="https://learn.microsoft.com/en-us/users/vuphanit/credentials/7d963bc1bdf46dfc?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/powerplatform-solutionarchitect-cert.png" alt="developer pl-600" className="badges" />
              </a> */}
              <a href="https://learn.microsoft.com/en-us/users/vuphanit/credentials/7d963bc1bdf46dfc?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/buildedition.png" alt="build challenge" className="badges" />
              </a>
              <a href="/nexacu.pdf" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/nexacu.png" alt="nexacu" className="badges" />
              </a>
            </div>
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

          {/* Next-page Link */}
          <div className="text-end w-100 mt-3">
            <Link href="/resume.pdf" target="_blank" className="btn btn-outline-warning m-1">download-my-resume</Link>
            <Link to="https://pointpokertroyphan.netlify.app/" target="_blank" className="btn btn-outline-warning m-1">visit-my-current-project</Link>
            <Link to="/blog" className="btn btn-outline-warning m-1">read-my-blogs</Link>
          </div>
        </div>
      </div>
    </Fade>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
