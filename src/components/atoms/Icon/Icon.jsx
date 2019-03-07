import React from 'react'
import { svgIcon } from './Icon.module.scss'

const Icon = ({ type, className }) => {
  let vector
  switch (type) {
    case 'notes':
      vector =
        'M4.64 14.606a.75.75 0 0 1 .341-.083H17a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25H3.769a.25.25 0 0 0-.25.25v10.18l1.12-.574zm-1.53 2.468a.75.75 0 0 1-1.091-.667V5c0-.966.783-1.75 1.75-1.75H17c.966 0 1.75.784 1.75 1.75v9.273a1.75 1.75 0 0 1-1.75 1.75H5.162L3.11 17.074zm16.292.676l1.121.574V7.654a.75.75 0 1 1 1.5 0V19.55a.75.75 0 0 1-1.092.667l-2.051-1.05H6.83a.75.75 0 1 1 0-1.5h12.23a.75.75 0 0 1 .342.082z'
      break
    case 'next':
      vector =
        'M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z'
      break
    case 'add':
      vector =
        'M12.75 12.75v6.513a.75.75 0 1 1-1.5 0V12.75H4.74a.75.75 0 1 1 0-1.5h6.51V4.713a.75.75 0 1 1 1.5 0v6.537h6.568a.75.75 0 1 1 0 1.5H12.75z'
      break
    case 'clock':
      vector =
        'M12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75zm0-1.5a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5zm4.128-5.118a.75.75 0 1 1-1.07 1.051l-3.808-3.876V7.044a.75.75 0 1 1 1.5 0v4.65l3.378 3.438z'
      break
    case 'close':
      vector =
        'M13.06 12.029l6.085 6.06a.75.75 0 0 1-1.058 1.062l-6.09-6.064-5.986 5.961a.75.75 0 1 1-1.059-1.063l5.983-5.956-6.03-6.005A.75.75 0 0 1 5.963 4.96l6.035 6.01 6.112-6.087a.75.75 0 0 1 1.059 1.063L13.06 12.03z'
      break
    case 'book':
    default:
      vector =
        'M19.504 17.997h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 1 1-1.5 0v-1.75h-1.75a.75.75 0 1 1 0-1.5h1.75v-1.75a.75.75 0 0 1 1.5 0v1.75zM3.527 8.25h17.05V5a.25.25 0 0 0-.25-.25h-3.32v1.092a.75.75 0 1 1-1.5 0V4.75H8.441v1.038a.75.75 0 0 1-1.5 0V4.75H3.777a.25.25 0 0 0-.25.25v3.25zm17.05 1.5H3.527V19c0 .138.112.25.25.25h9.526a.75.75 0 1 1 0 1.5H3.777A1.75 1.75 0 0 1 2.027 19V5c0-.966.784-1.75 1.75-1.75h3.164v-.449a.75.75 0 1 1 1.5 0v.449h7.066v-.449a.75.75 0 1 1 1.5 0v.449h3.32c.966 0 1.75.784 1.75 1.75v9.601a.75.75 0 1 1-1.5 0V9.75z'
      break
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#400099"
      role="img"
      className={`${svgIcon} ${className}`}
    >
      <title />
      <path d={vector} />
    </svg>
  )
}

export default Icon
