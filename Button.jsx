import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  
  const { backgroundColor, size, animate, onClick, children, icon } = props
  
  const backgroundBtn = backgroundColor ? 'bg-' + backgroundColor : 'bg-main'
  
  const sizeBtn = size ? 'btn-' + size : ''

  const animateBtn = animate ? 'btn-animate' : ''



  return (
    <button
        className={`btn ${backgroundBtn} ${sizeBtn} ${animateBtn}`}
        onClick={onClick ? () => onClick() : null}
    >
        <span className="btn__txt">
            {children}
        </span>
        {
            icon ? (
                <span className="btn__icon">
                    <i className={`${icon} bx-tada`} />
                </span>
            ) : null
        }
    </button>
  )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button