import React from "react"
import './PortControl.css'
import ControlBlock from "../ControlBlock";

function PortControl() {
  return(
    <ControlBlock title='Управление портом TC'>
      <div className="port-control">
        <div className="port-control__indicator">
          <div>False</div>
        </div>
        <div className="port-control__button-container">
          <button>Захват TC</button>
          <button disabled>Unlock TC</button>
        </div>
      </div>
    </ControlBlock>
  )
}

export default PortControl