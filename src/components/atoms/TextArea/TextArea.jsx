import React from 'react'
import PropTypes from 'prop-types'
import { textArea } from './TextArea.module.scss'

const TextArea = props => {
  return (
    <div className={textArea}>
      <textarea {...props} />
    </div>
  )
}

TextArea.propTypes = {}

export default TextArea
