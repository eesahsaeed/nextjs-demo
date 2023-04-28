
import React from 'react'
import posts from "../posts.json";
import Head from 'next/head';

const Post = (props) => {

  const {post} = props;

  return (
    <div>
      <Head>
        <title>{post.title.toUpperCase()}</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

Post.getInitialProps = ({query}) => {
  
  return {
    post: posts[query.id]
  }
}

export default Post;
