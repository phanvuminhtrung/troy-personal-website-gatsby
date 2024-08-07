import React from 'react';
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import "../components/blog-post.css"
import { Zoom } from 'react-awesome-reveal';

// Query for blog post by slug
export const query = graphql`
   query BlogPostBySlug($slug: String) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    publishedDate
    content {
      raw
      references {
        ... on ContentfulComponentRichImage {
          contentful_id
          image {
            file {
              url
            }
            title
          }
        }
      }
    }
  }
}
`;

// Bindings for blog post to the blog post page & display blog post content based on the slug
const BlogPost = ({ data }) => {
  const { contentfulBlogPost } = data;
  console.log(contentfulBlogPost.content.raw);

  // Trying render image, video, hyperlink as node
  const options = {
    renderNode: {
      // Handling embedded entry block (e.g., images)
      ['embedded-entry-block']: (node) => {  
        try {
          console.log("Hyperlink");
          const entryId = node.data.target.sys.id;
          const entry = contentfulBlogPost.content.references.find(ref => ref.contentful_id === entryId);
  
          if (entry && entry.image && entry.image.file) {
            return <img src={entry.image.file.url} alt={entry.image.title} />;
          } else {
            console.warn("Entry not found or missing image data:", entry);
          }
          return null; 

        } catch (error) {
          console.error("Error processing embedded entry block:", error);
          return <div>Error loading embedded entry</div>;
        }
      }
      // Handling hyperlink: need to test
    },
  };

  // Render the content using documentToReactComponents
  const renderedContent = documentToReactComponents(JSON.parse(contentfulBlogPost.content.raw), options);

  return (
    <Layout>
      <Zoom>
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <div className='blog-post'>
          <h2>{contentfulBlogPost.title}</h2>
          <a>{contentfulBlogPost.publishedDate}</a>
          <div className='mt-5 mb-5'>{renderedContent}</div>
          {/* Back to Blogs buton */}
          <div className="mt-5 text-end w-100">
            <Link to="/blog" className="btn btn-outline-warning m-1">back-to-blogs</Link>
          </div>
        </div>
      </div>
      </Zoom>
    </Layout>
  );
};

export default BlogPost;