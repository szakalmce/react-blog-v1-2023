import React from 'react';
import PostsList from '../components/PostsList';
import Layout from '../Layouts/Layout';

const Posts = () => {
  return (
    <Layout>
      <PostsList page="posts" />
    </Layout>
  );
};

export default Posts;
