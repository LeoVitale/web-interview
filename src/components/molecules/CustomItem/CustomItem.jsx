import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'components/atoms/Avatar'
import UserHeader from 'components/atoms/UserHeader'
import Icon from 'components/atoms/Icon'
import {
  userItem,
  userData,
  actions,
  addIcon,
  addAvatar,
} from './CustomItem.module.scss'

const CustomItem = ({ action, header, avatar, subHeader }) => {
  const userProps = { title: header, subHeader }

  const avatarProps = avatar
    ? { name: header, img: avatar }
    : { className: addAvatar, icon: <Icon type="add" className={addIcon} /> }

  return (
    <div className={userItem}>
      <div className={userData}>
        <Avatar size="small" {...avatarProps} />
        <UserHeader {...userProps} />
      </div>
      <div className={actions}>{action}</div>
    </div>
  )
}

CustomItem.propTypes = {
  action: PropTypes.node,
  user: PropTypes.object,
  subHeader: PropTypes.string,
}

CustomItem.defaultProps = {
  user: {},
  subHeader: '',
}

export default CustomItem
