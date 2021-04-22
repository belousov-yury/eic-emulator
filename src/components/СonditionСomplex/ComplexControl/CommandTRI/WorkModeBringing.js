import React from "react"
import './WorkModeBringing.css'
import ControlBlock from "../ControlBlock";

function WorkModeBringing() {
  return(
    <ControlBlock title='Приведение в рабочий режим'>
      <div className="work-mode">
        <div className="work-mode-button-container ranging__item">
          <button>Подготовка оборудования ЗС к измерению</button>
        </div>
        <div className="automatic-container ranging__item">
          <label>
            <input type="checkbox"/>
            Автоматическая выдача
          </label>
          <input type="number"/>
        </div>
        <div className="time-command-container ranging__item">
          <div>Время выдачи команды:</div>
          <div>??????????????</div>
        </div>
        <div className="time-claim-check-container ranging__item">
          <div>Время выдачи команды:</div>
          <div>??????????????<br/>??????????????</div>
        </div>
      </div>
    </ControlBlock>
  )
}

export default WorkModeBringing