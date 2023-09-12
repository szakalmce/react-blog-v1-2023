import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  console.log(location);

  const breadCrumbs = location.pathname
    .replace(/%20| /g, '')
    .split('/')
    .filter((x) => x);

  return (
    <div>
      {location.pathname && (
        <>
          <div className="breadcrumbs-wrapper">
            {breadCrumbs.map((item, index) => {
              if (breadCrumbs.length === index + 1) {
                return (
                  <p key="2">
                    {item.charAt(0).toUpperCase()}
                    {item.slice(1)}
                  </p>
                );
              } else {
                return (
                  <>
                    <Link key={item} to={`/${item}`}>
                      {item.charAt(0).toUpperCase()}
                      {item.slice(1)}
                    </Link>
                    <p>/</p>
                  </>
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
