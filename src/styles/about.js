import styled from 'styled-components';

const About = styled.section`
  .image-cropper {
    width: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }

  .profileImage {
    display: inline;
    max-width: 300px;
    width: 100%;
    float: left;
    margin: 0px 20px 20px 0px;
  }

  img {
    margin-bottom: 0px;
  }

  @media (max-width: 700px) {
    .profileImage {
      float: none;
      display: block;
      margin: 0 auto;
      padding-bottom: 20px;
    }
  }
`;

export default About;
