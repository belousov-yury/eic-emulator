import React from "react"
import './CommandInfoRate.css'
import ControlBlock from "../ControlBlock";


function CommandInfoRate() {
    return(
      <ControlBlock title='Скорость передачи командной информации (КИ)'>
        <div className="command-info-rate">
          <div>Скорость КИ (бит/с):</div>
          <input type="number"/>
          <button>Установить</button>
        </div>
      </ControlBlock>
    )
}

export default CommandInfoRate