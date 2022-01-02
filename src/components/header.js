import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
  >
    <div
      className="container d-f jc-sb"
    >
      <h2>From 2006-2010</h2>
      <a href="" className="button">Listen on Spotify</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
