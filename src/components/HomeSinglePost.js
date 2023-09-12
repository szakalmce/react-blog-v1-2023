import React from 'react';
import { Link } from 'react-router-dom';
import { urls } from '../utils/urls';

const HomeSinglePost = ({ id, title, desc, post }) => {
  return (
    <Link
      to={`${urls.posts}/${title.toLowerCase().replace(/%20| /g, '')}`}
      state={{ post }}
      className="home-single-post-wrapper"
    >
      {title}
    </Link>
  );
};

export default HomeSinglePost;
