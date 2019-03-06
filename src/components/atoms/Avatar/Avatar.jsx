import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.scss'

const Avatar = ({ img, name, icon, className }) => {
  const { avatar } = styles

  return (
    <div className={`${avatar} ${className}`}>
      {icon ? icon : <img src={img} alt={name} />}
    </div>
  )
}

Avatar.propTypes = {}

export default Avatar
