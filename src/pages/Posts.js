import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PostsList from '../components/PostsList';
import Layout from '../Layouts/Layout';

const Posts = () => {
  return (
    <Layout>
      <Breadcrumbs />
      <PostsList page="posts" />
    </Layout>
  );
};

export default Posts;
