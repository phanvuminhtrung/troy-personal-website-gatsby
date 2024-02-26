import * as React from "react"
import { Link } from "gatsby"

// SUMARY: set up navigation links
const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/bucketlist">Bucketlist Achievement</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
