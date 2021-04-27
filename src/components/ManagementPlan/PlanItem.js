import React from "react"
import './PlanItem.css'

function PlanItem({name, start, duration, direct}) {

  const getStyle = () => {
    const styles = {}
    if (direct === 'left') {
      styles.width = duration / 60 / 60 + '%'
      styles.height = '100%'
      if(duration < 1100) {
        styles.height = '85%'
        styles.flexDirection =  'column'
      }
    } else {
      styles.height = duration / 60 / 60 + '%'
      styles.width = '100%'
    }
    styles[direct] = 100 / 24 * start + '%'
    return styles
  }
  const getTextPosition = () => {
    const styles = {}
    if (direct === 'left') {
      if(duration < 1100) {
        styles.position = 'absolute'
        styles.maxHeight = '30px'
        styles.width = '300px'
        styles.top = '330%'
        return styles
      }
      if(duration < 2500) {
        styles.position = 'absolute'
        styles.transform = 'rotate(-90deg)'
        styles.width = '120px'
        styles.overflow = 'hidden'
      }
    } else {
      if (duration < 1000) {
        styles.position = 'absolute'
        styles.top = -55 + '%'
      }
    }
    return styles
  }

  return (
    <div className='plan-item' style={getStyle()}>
      <div className="plan-item__title-container">
        <div className="plan-item__title" style={getTextPosition()}>
          {name}
        </div>
      </div>
    </div>
  )
}

export default PlanItem