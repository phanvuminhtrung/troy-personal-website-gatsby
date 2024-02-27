import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Query for blog posts
export const query = graphql`
  {
    allContentfulBlogPost {
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
    <div className="blog-page">
    <Layout>
      <Seo title="Blog" />
        {/* Map through each blog post and display a link with the title and publish date */}
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <h2>
              {/* Link to the blog post detail page */}
              <Link to={`/blog/${node.slug}`}>{node.title}</Link>
            </h2>
            <p>{node.publishedDate}</p>
          </div>
        ))}
    </Layout>
    </div>
  );
};

export default BlogPage;
