import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Layout from '../Layouts/Layout';

const SinglePost = () => {
  const location = useLocation();

  const breadCrumbs = location.pathname
    .replace(/%20| /g, '')
    .split('/')
    .filter((x) => x);

  const { post } = location.state ? location.state : '';

  return (
    <Layout>
      {location.pathname && (
        <>
          <Breadcrumbs />
          <div className="content-wrapper single-post-wrapper">
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </div>
        </>
      )}
    </Layout>
  );
};

export default SinglePost;
