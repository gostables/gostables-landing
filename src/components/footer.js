import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <img
        alt={props.image_alt}
        src="/playground_assets/logox.png"
        className="footer-image"
      />
      <span className="footer-text">© 2022 - {new Date().getFullYear()}{props.text}</span>
    </footer>
  )
}

Footer.defaultProps = {
  image_alt: 'logo',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text: ' goStables Protocol, All Rights Reserved.',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
