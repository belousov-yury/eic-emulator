import React from "react"
import './CortexBlockSettings.css'
import ControlBlock from "../ControlBlock";

function CortexBlockSettings() {
  return(
    <ControlBlock title='Настроки конфигурации блока Cortex'>
      <div className="cortex-block-settings">
        <div className="cortex-block-settings__item">
          <div>Номер</div>
          <select name="number">
            <option value="0">Cortex №1</option>
            <option value="1">Cortex №2</option>
          </select>
        </div>
        <div className="cortex-block-settings__item">
          <div>Режим работы</div>
          <select name="workMode">
            <option value="0">XL2</option>
            <option value="1">Q</option>
          </select>
        </div>
        <div className="cortex-block-settings__item">
          <button>Обновить</button>
        </div>
      </div>
    </ControlBlock>
  )
}

export default CortexBlockSettings