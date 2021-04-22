import React from "react"
import './MeasurementParameters.css'
import ControlBlock from "../ControlBlock";

function MeasurementParameters() {
  return(
    <ControlBlock title='Параметры измерения'>
      <div className="meas-params">
        <div className="meas-params__item">
          <div>Тип измерения:</div>
          <select name="measType">
            <option value="0">Дальность</option>
            <option value="1">Близость</option>
          </select>
        </div>
        <div className="meas-params__item">
          <div>Вид измерения:</div>
          <select name="measType">
            <option value="0">Phase and Time (int)</option>
          </select>
        </div>
        <div className="meas-params__item">
          <label>
            <input type="checkbox"/>
            Выдавать команду на реконфигурацию ЗС
          </label>
        </div>
        <div className="meas-params__item">
          <button>Запуск измерения дальности</button>
        </div>
        <div className="meas-params__item">
          <button>Прервать измерение дальности</button>
        </div>
      </div>
    </ControlBlock>
  )
}

export default MeasurementParameters