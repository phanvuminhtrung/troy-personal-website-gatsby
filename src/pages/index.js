import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/index.css"

//Render the index page
const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="home-page ml-2 mr-2">
        <h2>Hi, thank you for visiting my site.</h2>
        <p className="mt-5">Nothing really much here but you may get to know me a bit.</p>
        <p className="mb-5">I also wrote stuff about tech.</p>
        
        {/* Quote*/}
        <blockquote className="blockquote">
          <p className="mt-1 mb-1 h2 text-end">"If you can't explain it simply</p>
          <p className="mt-1 h2 text-end">you don't understand it well enough."</p>
          <footer className="blockquote-footer mt-3 text-end">Albert Einstein</footer>
        </blockquote>

        {/* Next-page Link */}
        <div className="mt-5 text-end w-100">
          <Link to="/about" className="btn btn-outline-warning">get-to-know-me</Link>
        </div>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Welcome" />

export default IndexPage
