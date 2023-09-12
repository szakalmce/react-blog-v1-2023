import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      {location.state && (
        <>
          <div className="breadcrumbs-wrapper">
            {breadCrumbs.map((item, index) => {
              if (breadCrumbs.length === index + 1) {
                return <p key="2">{item}</p>;
              } else {
                return (
                  <>
                    <Link key={item} to={`/${item}`}>
                      {item}
                    </Link>
                    <p>/</p>
                  </>
                );
              }
            })}
          </div>
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
