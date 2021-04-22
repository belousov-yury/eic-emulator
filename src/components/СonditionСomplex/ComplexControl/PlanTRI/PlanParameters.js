import React from "react"
import './PlanParameters.css'
import ControlBlock from "../ControlBlock";

function PlanParameters() {
  return(
    <ControlBlock title='Параметры плана траекторных измерений'>
      <div className="plan-param">
        <div className="plan-param__item plan-param__item--input-container">
          <label>
            <input type="checkbox"/>
            Выполнять автоматически
          </label>
          <div className="plan-param__item--period-container">
            <div className="plan-param__item--period-title">Период:</div>
            <input type='number' className="plan-param__item--period"/>
          </div>
        </div>
        <div className="plan-param__item plan-param__item--button-container">
          <button>Выполнить сеанс</button>
          <button>Сброс</button>
        </div>
      </div>
    </ControlBlock>
  )
}

export default PlanParameters