import React from "react"
import './LifeMark.css'
import ControlBlock from "../ControlBlock";

function LifeMark() {
  return(
    <ControlBlock title="Метка жизни">
      <div className='life-mark'>
        <div className="life-mark__item">
          <label className='life-mark__label'><input type="checkbox" name='mainSemiSet'/>Выдавать метки жизни</label>
        </div>
        <div className="life-mark__item">
          <div className="life-mark__period-container">
            <div>Период выдачи (сек.):</div>
            <input type="number" min='0'/>
            <button>Применить</button>
          </div>
        </div>
        <div className="life-mark__item">
          <label className='life-mark__label'><input type="checkbox" name='mainSemiSet'/>Переподключаться к АРМ, если нет квитанции в течении 3-х тактов</label>
        </div>
      </div>
    </ControlBlock>
  )
}

export default LifeMark