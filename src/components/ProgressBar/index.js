import React from 'react'

class ProgressBar extends React.Component {
  render() {
    const { percentage, color } = this.props;
    return (
      <div className="progress-bar">
        <div className="bar" style={{ width: percentage, backgroundColor: color }}></div>
      </div>
    )
  }
}

export default ProgressBar