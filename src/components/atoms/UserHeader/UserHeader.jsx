import React from 'react'
import PropTypes from 'prop-types'
import styles, { userHeader } from './UserHeader.module.scss'

const UserHeader = ({ title, subHeader }) => {
  return (
    <div className={userHeader}>
      {title && <span className={styles.title}>{title}</span>}
      {subHeader && <span className={styles.subheader}>{subHeader}</span>}
    </div>
  )
}

UserHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
}

export default UserHeader
