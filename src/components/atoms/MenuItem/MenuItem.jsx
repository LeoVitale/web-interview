import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'components/atoms/Icon'
import styles from './MenuItem.module.scss'

const MenuItem = ({ icon, label, to }) => {
  const { menuItem, iconItem } = styles
  return (
    <Link className={menuItem} to={to}>
      <Icon className={iconItem}/>
      <span>{label}</span>
    </Link>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default MenuItem
