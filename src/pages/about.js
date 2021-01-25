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
            After nine years leading intelligence and cybersecurity teams, I
            turned my late-night coding passion into a career! I get most enjoyment
            from solving problems, turning designs into applications, and
            teaching others.
          </p>

          <p>
            My coding journey started unexpectedly when I tried to find
            solutions to automate data processing as an intelligence analyst. I
            learned Python and fell in love with programming/scripting fun
            things together. I was hooked! So, over the next several years, I
            learned iOS development using Swift and Objective-C, and web
            development using JavaScript and React.
          </p>

          <p>
            I've built tools used within the Department of Defense and currently
            work as a Frontend Developer and UI/UX Designer for DefendEdge.
          </p>

          <p>
            Outside of work, I love playing the piano, attempting to learn the
            guitar, and being outdoors.
          </p>

          <p>
          <a href="Resume-Josh-Rutkowski.pdf">Resume</a>
          </p>
        </About>
      </Layout>
    </main>
  );
};
export default AboutPage;
