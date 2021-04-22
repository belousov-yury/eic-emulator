import React from "react"
import './TargetDesignation.css'
import ParametersTD from "./ParametersTD";
import CurrentTD from "./CurrentTD";
import TLETD from "./TLETD";

function TargetDesignation() {
  return(
    <div className='target-designation'>
      <ParametersTD />
      <CurrentTD />
      <TLETD />
    </div>
  )
}

export default TargetDesignation