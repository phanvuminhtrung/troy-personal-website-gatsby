import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/index.css"

//Render the index page
const IndexPage = () => (
  <Layout>
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="home-page ml-2 mr-2">
        <Seo title="Welcome" />
            <h2>Hi, thank you for visiting my site.</h2>
            <p className="mt-5">Nothing really much here but you may get to know me a bit.</p>
            <p className="mb-5">I also wrote stuff about tech.</p>
            <blockquote className="blockquote">
              <p className="mt-1 mb-1 h2 text-center">"If you can't explain it simply</p>
              <p className="mt-1 mb-1 h2 text-center">you don't understand it well enough."</p>
              <footer className="blockquote-footer mt-3">Albert Einstein</footer>
            </blockquote>
            <div className="mt-4 text-end w-100">
              <Link to="/about" className="btn btn-outline-warning">get-to-know-me</Link>
            </div>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Welcome" />

export default IndexPage
