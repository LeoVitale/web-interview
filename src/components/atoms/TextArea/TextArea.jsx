import React from 'react'
import { textArea } from './TextArea.module.scss'

const TextArea = props => {
  return (
    <div className={textArea}>
      <textarea {...props} />
    </div>
  )
}

export default TextArea
