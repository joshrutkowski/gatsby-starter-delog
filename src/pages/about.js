import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import About from '../styles/about';

const AboutPage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <main>
      <Layout>
        <About>
        <h1>About me</h1>
            <div className="profileImage">
            <div className="image-cropper">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Profile image"
              />
            </div>
          </div>
 

          <p>
            I'm an iOS and frontend web developer based in Maryland, USA. After
            nine years as an intelligence and cybersecurity analyst for the US
            Navy, I turned my passion for late-night coding into a career! I get
            most enjoyment from solving problems with writing maitainable code
            and sharing my knowledge with others.
          </p>

          <p>
            I am mainly a self-taught developer - in University I studied
            Political Science and Linguistics. My coding journey started
            unexpectedly when I tried to find solutions to automate data
            processing as an intelligence analyst. I learned Python and used
            Jupyter Notebook and fell in love with programming/scripting fun
            things together. I was hooked! So, over the next several years, I
            started learning iOS development using Swift and Objective-C, and
            web development using JavaScript and React.
          </p>

          <p>I've built tools used within the Department of Defense and currently work as a Frontend Developer and UI/UX Designer for DefendEdge.</p>

          <p>
            Outside of work, I love playing the piano, attempting to learn the guitar, and being outdoors.
          </p>
        </About>
      </Layout>
    </main>
  );
};
export default AboutPage;
