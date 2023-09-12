import React from 'react';
import PostsList from '../components/PostsList';
import Layout from '../Layouts/Layout';

const Home = () => {
  return (
    <div>
      <Layout>
        <PostsList page="home" />
      </Layout>
    </div>
  );
};

export default Home;
