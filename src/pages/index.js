import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <div className="home-page">
    <Layout>
      <Seo title="Home" />
      <h1>Troy Phan</h1>
      <p>"If you can't explain it simply, you don't understand it well enough." - Albert Einstein</p>
      <Link to="/about">get to know me!</Link>
    </Layout>
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
