import React from "react"
import './StatusInquiry.css'
import ControlBlock from "../ControlBlock";

function StatusInquiry() {
  return(
    <ControlBlock title="Запрос статуса полукомплекта">
      <div className='status-inquiry'>
        <div className="status-inquiry__item">
          <label className='status-inquiry__label'><input type="checkbox" name='mainSemiSet'/>Автоматическая выдача</label>
        </div>
        <div className="status-inquiry__item">
          <div className="status-inquiry__period-container">
            <div>Период выдачи (сек.):</div>
            <input type="number" min='0'/>
            <button>Запросить</button>
          </div>
        </div>
        <div className="status-inquiry__item">
          <div className="status-inquiry__time-container">
            <div>Время команды/квитанции:</div>
            <div>??:??:??.???</div>
          </div>

        </div>
      </div>
    </ControlBlock>
  )
}

export default StatusInquiry