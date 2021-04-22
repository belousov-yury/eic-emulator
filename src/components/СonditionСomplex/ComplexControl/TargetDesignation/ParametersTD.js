import React, {useState} from "react"
import './ParametersTD.css'
import ControlBlock from "../ControlBlock";
import "react-datepicker/dist/react-datepicker.css";

function ParametersTD() {
  const [dateTime, setDateTime] = useState(new Date())

  const handleOnChangeDate = (e) => {
    setDateTime(e.target.value)
  }
  return(
    <ControlBlock title='Параметры целеуказаний'>
      <div className="param-td">
        <div className="param-td__item">
          <div className="td-table">
            <div className="td-table__column left-column">
              <div className="td-table__cell">Дата/время начала ЦУ:</div>
              <div className="td-table__cell">Кол-во точек ЦУ</div>
              <div className="td-table__cell">Интервал между ЦУ (мин.):</div>
              <div className="td-table__cell">Начальные координаты:</div>
            </div>
            <div className="td-table__column right-column">
              <div className="td-table__cell">
                <input type="datetime-local"
                       className='date-time-picker one-input'
                       value={dateTime}
                       onChange={handleOnChangeDate}
                       step="1"
                />
              </div>
              <div className="td-table__cell">
                <input type="number" min='0' className='one-input'/>
              </div>
              <div className="td-table__cell">
                <input type="number" min='0' className='one-input'/>
              </div>
              <div className="td-table__cell">
                <input className='start-coordinate-input-1' type="number"/>
                <input className='start-coordinate-input-2' type="number"/>
              </div>
            </div>
          </div>
        </div>
        <div className="param-td__item">
          <div className="param-td__button-container">
            <button className='param-td__button'>Сформировать ЦУ</button>
          </div>
        </div>
      </div>
    </ControlBlock>
  )
}

export default ParametersTD