import React from "react"
import { StaticQuery, graphql} from "gatsby"
import { SocialIcon } from 'react-social-icons';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title} <span class="wave">👋</span></div>
        <div 
          className="sub-heading" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <div className="primary-content" >I can help you solve a problem or launch a new product. 🚀 </div>
        <a href="mailto:hello@joshrutkowski.com" className="button -primary">Get in touch &rarr;</a>
        <SocialIcon url="http://twitter.com/joshuarutkowski" bgColor="#2E3441" fgColor="#fff" style={{ marginLeft: '.5rem', height: 35, width: 35 }}/>
        <SocialIcon url="http://linkedin.com/in/joshuarutkowski" bgColor="#2E3441" fgColor="#fff"style={{ marginLeft: '.5rem', height: 35, width: 35 }} />
        <SocialIcon url="http://github.com/joshrutkowski" bgColor="#2E3441" fgColor="#fff"style={{ marginLeft: '.5rem', height: 35, width: 35 }}/>

      </div>
    )}
  />
)