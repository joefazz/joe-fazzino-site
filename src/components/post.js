import React from 'react';
import moment from 'moment';
import { css } from 'emotion';

const Post = ({ node: { frontmatter, timeToRead, html } }) => {
  return (
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
          @media (max-width: 320px) {
            text-align: center;
          }
        `}
      >
        {frontmatter.title}
      </h1>
      <h2
        className={css`
          @media (max-width: 320px) {
            text-align: center;
          }
        `}
      >
        {moment(frontmatter.date).format('DD MMMM YY')}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Post;
