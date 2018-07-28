import React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';

const linkStyle = css({
  textAlign: 'center',
  color: 'olive',
});

const Header = ({ siteTitle }) => (
  <div
    className={css`
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      background: transparent;
      margin: 1.45rem 0;

      @media (max-width: 320px) {
        margin-bottom: 0;
      }
    `}
  >
    <div
      className={css`
        grid-column-start: 2;

        @media (max-width: 320px) {
          padding: 1.45rem 0;
          grid-column: 1 / span 3;
        }
      `}
    >
      <h1
        className={css`
          text-align: center;
        `}
      >
        <Link
          to="/"
          css={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        className={css`
          display: grid;
          margin-top: 20px;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <Link to="/" className={linkStyle}>
          Blog
        </Link>
        <Link to="/about" className={linkStyle}>
          About
        </Link>
        <Link to="/contact" className={linkStyle}>
          Contact
        </Link>
      </nav>
    </div>
  </div>
);

export default Header;
