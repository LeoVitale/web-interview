import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.scss'

const Avatar = ({ img, name, icon, size, className }) => {
  const { avatar, small, medium } = styles
  const getSize = size => {
    if (size === 'small') {
      return small
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
