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
} from './UserItem.module.scss'

const UserItem = ({ action, user, header, subHeader }) => {
  const name = user ? `${user.firstName} ${user.lastName}` : ''
  const userProps = user
    ? { title: name, subHeader }
    : { title: header, subHeader }

  const avatarProps = user
    ? { name, img: user.avatar }
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

UserItem.propTypes = {
  action: PropTypes.node,
  user: PropTypes.object,
  subHeader: PropTypes.string,
  header: PropTypes.string,
}

UserItem.defaultProps = {
  action: null,
  subHeader: '',
  header: '',
}

export default UserItem
