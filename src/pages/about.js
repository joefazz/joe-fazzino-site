import React from 'react';
import { css } from 'emotion';
import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <div>
      <h1>About Me</h1>
      <img
        alt="Joe Fazzino looking way too serious"
        className={css`
          width: 150px;
          height: 150px;
          border-radius: 10px;

          @media (min-width: 1001px) {
            float: left;
            margin-right: 20px;
            margin-bottom: 0px;
          }

          @media (max-width: 1000px) {
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
          }
        `}
        src="https://pbs.twimg.com/profile_images/983326497728548865/6E7vwfvW_400x400.jpg"
      />

      <p>
        <i>
          Hi! I'm a Computer Science Student from the University of Reading and
          a Software Developer specialising in modern front end web technologies
          such as, React, React Native and Vue. I am also familiar with NodeJS,
          GraphQL, Java, C# and the .NET Framework.
        </i>
      </p>
      <br />
      <p>
        In my free time currently I'm working on a cross platform React Native
        application called <b>Flatmates</b> which aims to help students find
        places to live.
      </p>

      <p>
        I have been working in London for the last year at a company called{' '}
        <b>Fluid Business Solutions</b> as the sole maintainer of their Android
        and iOS applications (also React Native based).
      </p>

      <p>
        For my final year at university which begins in October I am developing
        an open learning platform that encourages users to share their knowledge
        with each other and hopefully provide some additional income.
      </p>

      <p>
        This website was built with Gatsby.js and uses Emotion for styling. I
        intend to develop it every now and then and add more information like a
        portfolio page etc.
      </p>
    </div>
  </Layout>
);

export default AboutPage;
