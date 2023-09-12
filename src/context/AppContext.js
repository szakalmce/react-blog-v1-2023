import React from 'react';
import { useContext, createContext } from 'react';
import { posts } from '../data/posts';
import { useState } from 'react';

const BlogContext = createContext();

export const useBlogContext = () => {
  return useContext(BlogContext);
};

const AppContext = ({ children }) => {
  const [postsList, setPostsList] = useState(posts);

  return (
    <BlogContext.Provider
      value={{
        postsList,
        setPostsList,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default AppContext;
