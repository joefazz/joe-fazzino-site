import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { css } from 'emotion';

import Header from './header';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={'Joe Fazzino'}
          meta={[
            { name: 'description', content: 'Personal webpage of Joe Fazzino' },
            { name: 'keywords', content: 'joe, fazzino, blog, website' },
          ]}
        />
        <Header siteTitle={'Joe Fazzino'} />
        <div
          className={css`
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows: 9fr 1fr;

            @media (max-width: 320px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          <div
            className={css`
              grid-column: 2;

              @media (max-width 320px) {
                grid-column: 2 / span 3;
              }
            `}
          >
            {children}
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
