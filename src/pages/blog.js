import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/blog.css"
import { Fade } from 'react-awesome-reveal';

// Query for blog posts (apply filter on node_locale to avoid duplicate content (i.e. content in different languages))
export const query = graphql`
  {
    allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          slug
          publishedDate
          content {
            raw
          }
        }
      }
    }
  }
`

// Bindings for blog posts to the blog page
const BlogPage = () => {
  const data = useStaticQuery(query); // useStaticQuery hook to execute the GraphQL query

  return (
    <Layout>
      <Fade>
      <Seo title="Blog" />
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="blog-page">
          <h2>Blog</h2>

          {/* Map through each blog post and display a link with the title and publish date */}
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <a className="custom-a">
                <Link to={`/blog/${node.slug}`}>{node.title}</Link>
              </a>
              <span> - {node.publishedDate}</span>
            </div>
          ))}

          {/* Next-page Link */}
          <div className="text-end w-100 mt-5">
            <Link to="/tool" className="btn btn-outline-warning m-1">get-to-know-my-tool</Link>
          </div>
        </div>
      </div>
      </Fade>
    </Layout>
  );
};

export default BlogPage;
