import React from "react"
import './RangingKA.css'

import ControlBlock from "../ControlBlock";

function RangingKA() {
  return(
    <ControlBlock title='Измерение дальности до КА'>
      <div className="ranging">
        <div className="ranging-button-container ranging__item">
          <button>Подготовка оборудования ЗС к калибровке</button>
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

export default RangingKA