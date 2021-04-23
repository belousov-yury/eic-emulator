import React from "react"
import './PortControlInstructions.css'
import ControlBlock from "../ControlBlock";

function PortControlInstructions() {
  return(
    <ControlBlock title='Инструкции управления порта TCU'>
      <div className="pc-instructions">
        <div className="pc-instructions__title">Интсрукция:</div>
        <div className="pc-instructions__control-container">
          <select name="instruction">
            <option value="0">???????????</option>
            <option value="0">???????????</option>
            <option value="0">???????????</option>
            <option value="0">???????????</option>
            <option value="0">???????????</option>
          </select>
          <button>Выполнить</button>
        </div>
      </div>
    </ControlBlock>
  )
}

export default PortControlInstructions