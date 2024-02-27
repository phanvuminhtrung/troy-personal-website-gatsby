import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BucketListPage = () => (
  <div className="bucket-list">
    <Layout>
      <Seo title="BucketList" />
        <div>
          <h1>My Bucket List</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
)

export const Head = () => <Seo title="BucketList" />

export default BucketListPage
