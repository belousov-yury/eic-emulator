import React from "react"
import './ZSConfiguration.css'
import ControlBlock from "../ControlBlock";

function ZSConfiguration() {
  return(
    <ControlBlock title="Конфигурация ЗС">
      <div className='zs-configuration'>
        <div className="zs-configuration__item">
          <label className='zs-configuration__label'><input type="checkbox" name='mainSemiSet'/>Автоматическая выдача</label>
        </div>
        <div className="zs-configuration__item">
          <div className="zs-configuration__period-container">
            <div>Период выдачи (сек.):</div>
            <input type="number" min='0'/>
            <button>Запросить</button>
          </div>
        </div>
        <div className="zs-configuration__item">
          <div className="zs-configuration__time-container">
            <div>Время команды/квитанции:</div>
            <div>??:??:??.???</div>
          </div>

        </div>
      </div>
    </ControlBlock>
  )
}

export default ZSConfiguration