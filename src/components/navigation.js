import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/blog">Blog</Link>
    <Link to="/tools">Tools</Link>
    <ThemeChanger/>
  </nav>
  
)