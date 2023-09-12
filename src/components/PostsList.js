import React from 'react';
import { useBlogContext } from '../context/AppContext';
import HomeSinglePost from './HomeSinglePost';

const PostsList = ({ page }) => {
  const { postsList } = useBlogContext();

  return (
    <div
      className={`home-posts-wrapper content-wrapper ${
        page === 'posts' && 'posts-wrapper'
      }`}
    >
      {page === 'home' ? (
        <>
          {[...postsList]
            .reverse()
            .map((post) => (
              <HomeSinglePost key={post.id} {...post} post={post} />
            ))
            .slice(0, 3)}
        </>
      ) : (
        <>
          {[...postsList].reverse().map((post) => (
            <HomeSinglePost key={post.id} {...post} post={post} />
          ))}
        </>
      )}
    </div>
  );
};

export default PostsList;
