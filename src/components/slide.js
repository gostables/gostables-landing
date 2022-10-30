import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-width max-content-container">

          <span className="slide-testimonial">{props.Vision}</span>

      </div>
    </div>
  )
}

Slide.defaultProps = {
  Vision:
    '"The goStables Protocol serves as a building block on Tron\'s DeFi Infrastructure. Starting within the Caribbean, the protocol enables broader access to stablecoins and the greater blockchain/Web3 economy. This opens the gateway for many to accept payments online easily along with an access route to foreign currencies (via USDD)."',
  rootClassName: '',
}

Slide.propTypes = {
  Vision: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide
