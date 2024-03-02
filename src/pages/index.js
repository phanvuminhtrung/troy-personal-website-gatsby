import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/index.css"

//Render the index page
const IndexPage = () => (
  <Layout>
    <div className="home-page">
      <Seo title="Home" />
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
  </Layout>
);
// const IndexPage = () => (
//   <Layout>
//     <div className="home-page">
//       <Seo title="Home" />
//       <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
//         <div className="card" style={{ width: '50rem', backgroundColor: '#333', color: 'white' }}>
//           <div className="card-body p-5">
//             <h2 className="card-title">Hi, thank you for visiting my site.</h2>
//             <p className="mt-5">Nothing really much here but you may get to know me a bit.</p>
//             <p className="mb-5">I aslo wrote stuff about tech.</p>
//             <blockquote className="blockquote">
//               <p className="mt-1 mb-1 h2 text-center">"If you can't explain it simply</p>
//               <p className="mt-1 mb-1 h2 text-center">you don't understand it well enough."</p>
//               <footer className="blockquote-footer mt-3">Albert Einstein</footer>
//             </blockquote>
//             <div className="text-end">
//               <Link to="/about" className="btn btn-outline-warning">get-to-know-me</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Layout>
// )

export const Head = () => <Seo title="Home" />

export default IndexPage
