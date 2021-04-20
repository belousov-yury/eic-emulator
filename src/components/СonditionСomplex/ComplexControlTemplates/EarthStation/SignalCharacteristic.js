import React from "react"
import './SignalCharacteristic.css'
import ControlBlock from "../ControlBlock";

function SignalCharacteristic() {
  return(
    <ControlBlock title="Характеристики принимаемого сигнала">
      <div className='signal-characteristic'>
        <div className="signal-characteristic__item">
          <label className='signal-characteristic__label'><input type="checkbox" name='mainSemiSet'/>Автоматическая выдача</label>
        </div>
        <div className="signal-characteristic__item">
          <div className="signal-characteristic__period-container">
            <div>Период выдачи (сек.):</div>
            <input type="number" min='0'/>
            <button>Запросить</button>
          </div>
        </div>
        <div className="signal-characteristic__item">
          <div className="signal-characteristic__time-container">
            <div>Время команды/квитанции:</div>
            <div>??:??:??.???</div>
          </div>
        </div>
      </div>
    </ControlBlock>
  )
}

export default SignalCharacteristic