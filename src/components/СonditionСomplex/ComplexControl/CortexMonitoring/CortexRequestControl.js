import React, {useState} from "react"
import './CortexRequestControl.css'
import ControlBlock from "../ControlBlock";

function CortexRequestControl() {
  const [peopleCount, setPeopleCount] = useState(10)
  return(
    <ControlBlock title='Управление запросами мониторинга Cortex'>
      <div className="ctx-request-control">
        <div className="ctx-request-control__item">
          <label>
            <input type="checkbox"/>
            Выдавать запрос автоматически
          </label>
        </div>
        <div className="ctx-request-control__item">
          <div>Период выдачи (сек.): </div>
          <div>
            <input type="number"/>
            <button>Запросить</button>
          </div>
        </div>
        <div className="ctx-request-control__item ctx-request-control__checkbox-container">
          <label><input type="checkbox"/>TCU</label>
          <label><input type="checkbox"/>IFR1</label>
          <label><input type="checkbox"/>IFR2</label>
          <label><input type="checkbox"/>IFR3</label>
          <label><input type="checkbox"/>IFM1</label>
        </div>
        <div className="ctx-request-control__item ctx-request-control__checkbox-container">
          <label><input type="checkbox"/>TCU</label>
          <label><input type="checkbox"/>IFR1</label>
          <label><input type="checkbox"/>IFR2</label>
          <label><input type="checkbox"/>IFR3</label>
          <label><input type="checkbox"/>IFM1</label>
        </div>
        <div className="ctx-request-control__item">
          <div className='ctx-request-control__item--people-count'>
            <div>Клиентов:</div>
            <div>{peopleCount}</div>
          </div>
          <input type="range" className='ctx-request-control__item--people-count-input'
                 min='0' max='100' step='1' value={peopleCount} onChange={e => setPeopleCount(e.target.value)}
          />
        </div>
        <div className="ctx-request-control__item">
          <div>Дата/время последнего запроса:</div>
          <div>??????????????????????????????</div>
        </div>
        <div className="ctx-request-control__item">
          <div>Дата/время последней квитанции:</div>
          <div>??????????????????????????????</div>
        </div>
      </div>
    </ControlBlock>
  )
}

export default CortexRequestControl