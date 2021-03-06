import React from 'react'
import './Test.scss'

// ToDo
// valid
// invalid

const Test = ({ status = 'valid', text = '' }) => {
  const renderSwitch = (param) => {
    switch (param) {
      case 'to-do':
        return '[ ]'
      case 'valid':
        return '✓'
      case 'invalid':
        return 'x'
    }
  }
  return (
    <div className={`Test ${status}`}>
      <div className="Test-container">
        <div className="Test-status">
          {
            renderSwitch(status)
          }

        </div>
        <div className="Test-input">{text}</div>
      </div>
    </div>
  )
}

export default Test
