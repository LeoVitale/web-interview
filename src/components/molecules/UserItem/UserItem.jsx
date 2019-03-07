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

const UserItem = ({ action, user }) => {
  const name = user ? `${user.firstName} ${user.lastName}` : ''
  const userProps = user
    ? { title: name, subHeader: 'test' }
    : { title: 'add family member' }

  const avatarProps = user
    ? { name, img: user.avatar }
    : { className: addAvatar, icon: <Icon type="add" className={addIcon} /> }

  return (
    <div className={userItem}>
      <div className={userData}>
        <Avatar {...avatarProps} />
        <UserHeader {...userProps} />
      </div>
      <div className={actions}>{action}</div>
    </div>
  )
}

UserItem.propTypes = {
  action: PropTypes.node.isRequired,
  user: PropTypes.object.isRequired,
}

export default UserItem
