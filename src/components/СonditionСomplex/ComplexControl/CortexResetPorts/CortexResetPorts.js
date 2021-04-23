import React from "react"
import './CortexResetPorts.css'
import ControlBlock from "../ControlBlock";

function CortexResetPorts() {
  return(
    <ControlBlock title='Сброс порта Cortex'>
      <div className="cortex-reset-ports">
        <div className="cortex-reset-ports__item">
          <div>Номер порта:</div>
          <div className='cortex-reset-ports__port-change'>
            <select>
              <option value="8080">8080</option>
              <option value="8081">8081</option>
            </select>
            <button>Сбросить порт</button>
          </div>
        </div>
      </div>
    </ControlBlock>
  )
}

export default CortexResetPorts