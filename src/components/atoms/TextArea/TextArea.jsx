import React from 'react'
import PropTypes from 'prop-types'
import styles from './TextArea.module.scss'

const TextArea = props => {
  const { textArea } = styles
  return (
    <div className={textArea}>
      <textarea {...props} />
    </div>
  )
}

TextArea.propTypes = {}

export default TextArea
