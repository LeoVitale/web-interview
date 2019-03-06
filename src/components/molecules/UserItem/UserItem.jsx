import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'components/atoms/Avatar'
import UserHeader from 'components/atoms/UserHeader'
import Icon from 'components/atoms/Icon'
import styles from './UserItem.module.scss'

const UserItem = ({ action, user }) => {
  const { userItem, userData, actions, addIcon, addAvatar } = styles
  let userHeader
  const name = user ? `${user.firstName} ${user.lastName}` : ''
  if (user) {
    userHeader = <UserHeader title={name} subheader="Teste" />
  } else {
    userHeader = <UserHeader title="Add Family Member" />
  }
  return (
    <div className={userItem}>
      <div className={userData}>
        {user ? (
          <Avatar name={name} img={user.avatar} />
        ) : (
          <Avatar
            className={addAvatar}
            icon={<Icon type="add" className={addIcon} />}
          />
        )}
        {userHeader}
      </div>
      <div className={actions}>{action}</div>
    </div>
  )
}

UserItem.propTypes = {}

export default UserItem
