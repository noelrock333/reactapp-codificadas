import React from 'react'

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress-bar">
        <div className="bar" style={{ width: this.props.percentage }}></div>
      </div>
    )
  }
}

export default ProgressBar