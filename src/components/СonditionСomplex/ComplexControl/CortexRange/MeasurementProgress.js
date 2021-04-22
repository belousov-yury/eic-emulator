import React from "react"
import './MeasurementProgress.css'
import ControlBlock from "../ControlBlock";

function MeasurementProgress() {
  return(
    <ControlBlock title='Ход измерения и результаты'>
      <div className="meas-progress">
        <div></div>
      </div>
    </ControlBlock>
  )
}

export default MeasurementProgress