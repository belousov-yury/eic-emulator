import React from "react"
import './TMIRate.css'
import ControlBlock from "../ControlBlock";

function TMIRate() {
  return(
    <ControlBlock title='Скорость приема ТМИ'>
      <div className="tmi-rate">
        <div className="tmi-rate__item">
          <div>Скорость ТМИ (бит/с):</div>
          <div className='tmi-rate__control-container'>
            <input type="number"/>
            <button>Установить</button>
          </div>
        </div>
        <div className="tmi-rate__item">
          <button>Запуск процедуры распознавания несущей</button>
        </div>
      </div>
    </ControlBlock>
  )
}

export default TMIRate