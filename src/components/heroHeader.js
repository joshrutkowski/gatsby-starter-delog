import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
      </div>
    )}
  />
)