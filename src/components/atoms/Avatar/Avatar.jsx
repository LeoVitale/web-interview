import React from 'react'
import PropTypes from 'prop-types'
import { avatar, small, medium, xSmall } from './Avatar.module.scss'

const Avatar = ({ img, name, icon, size, className }) => {
  const getSize = size => {
    if (size === 'small') {
      return small
    } else if (size === 'xSmall') {
      return xSmall
    } else {
      return medium
    }
  }
  return (
    <div className={`${avatar} ${className} ${getSize(size)}`}>
      {icon ? icon : <img src={img} alt={name} />}
    </div>
  )
}

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Avatar
