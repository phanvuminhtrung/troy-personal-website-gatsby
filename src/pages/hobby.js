import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/hobby.css"
import { Fade } from 'react-awesome-reveal';

const HobbyPage = () => (
  <Layout>
    <Fade>
    <Seo title="Hobby" />
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="hobby-page">
          <div>
            <h2>A bit about what i am into recently</h2>
            <h4 className="mt-4 mb-4">PIANO</h4>

            <div className="d-inline-block w-100 mb-1">I always told myself that being self-taught is one of my strong suits, so why not give music a try?</div>
            <div className="d-inline-block w-100 mb-1">So I bought a piano and started learning from YouTube. Somehow, I found it very interesting.</div>
            <div className="d-inline-block w-100 mb-1">Also, I am inspired by this guy who spent 2000 hours learning classical pieces which also become a milestone for me to get there.</div>
            <div class="video-container mt-4 mb-4">            
                <iframe src="https://www.youtube.com/embed/wtk5PUH9gME" title="2.5 Years of Piano Progress / Adult Self-Taught (2000 Hours)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="d-inline-block w-100 mb-1">A few pieces i am trying to learn as beginner: </div>
            <ul>
              <li>River Flow In You</li>
              <li>Past Lives</li>
              <li>Ki mino Toriko</li>
              <li>Comptine d’un autre été</li>
            </ul>

            <h4 className="mt-4 mb-4">GAME</h4>
            <div className="d-inline-block w-100 mb-1">I never heard of any IT guys did not played any video games before. And i played too.</div>
            <div className="d-inline-block w-100 mb-1">I mostly play FPS and sport games with my friends. Playing alone is too boring nowadays</div>   
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

export const Head = () => <Seo title="Hobby" />

export default HobbyPage
