import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import "../components/blog-post.css"

// Query for blog post by slug
export const query = graphql`
    query BlogPostBySlug($slug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
          title
          publishedDate
          content {
            raw
          }
        }
    }
`;

// Bindings for blog post to the blog post page & display blog post content based on the slug
const BlogPost = ({ data }) => {
  const { contentfulBlogPost } = data;

  // Define custom render options for Rich Text
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{children}</a>;
      },
      // Add other custom render options as needed
    },
  };

  // Render the content using documentToReactComponents
  const renderedContent = documentToReactComponents(JSON.parse(contentfulBlogPost.content.raw), options);

  return (
    <Layout>
      <div className='blog-post'>
        <h2>{contentfulBlogPost.title}</h2>
        <a>{contentfulBlogPost.publishedDate}</a>
        <div className='mt-5 mb-5'>{renderedContent}</div>
      </div>
    </Layout>
  );
};

export default BlogPost;