import React from "react"
import './CurrentSessionTRI.css'
import ControlBlock from "../ControlBlock";

function CurrentSessionTRI() {
  const data = [
    {
      execution: true,
      operation: 'Измерение угломестных координат',
      result: null,
      startTime: null,
      endTime: null
    },
    {
      execution: true,
      operation: 'Подготовка ЗС к калибровке',
      result: null,
      startTime: null,
      endTime: null
    },
    {
      execution: false,
      operation: 'Калибровка',
      result: null,
      startTime: null,
      endTime: null
    },
    {
      execution: true,
      operation: 'Подготовка ЗС к измерению дальности',
      result: null,
      startTime: null,
      endTime: null
    },
    {
      execution: true,
      operation: 'Измерение дальности',
      result: null,
      startTime: null,
      endTime: null
    },
    {
      execution: true,
      operation: 'Приведение ЗС в рабочий режим',
      result: null,
      startTime: null,
      endTime: null
    },
    {
      execution: false,
      operation: 'Измерение угломестных координат',
      result: null,
      startTime: null,
      endTime: null
    }
  ]
  const getRows = () => {
    const rows = data.map((item, index) => (
      <tr key={index}>
        <td><input type="checkbox" checked={item.execution} onChange={handleChangeCheckBox}/></td>
        <td>{item.operation}</td>
        <td>{item.result}</td>
        <td>{item.startTime}</td>
        <td>{item.endTime}</td>
      </tr>
    ))
    return rows
  }

  const handleChangeCheckBox = () => {

  }

  return(
    <ControlBlock title='Текущий сеанс ТРИ'>
      <div className="current-tri">
        <div className="current-tri__item time-session">
          <div className="time-session__time-container">
            <div className="time-session__time-title">Время сеанса ТРИ:</div>
            <div className="time-session__time">???????????????</div>
          </div>
        </div>
        <div className="current-tri__item">
          <div className="current-tri__table-container">
            <table className="current-tri__table">
              <thead>
              <tr>
                <th>Выполнение</th>
                <th>Операция</th>
                <th>Результат</th>
                <th>Время начала</th>
                <th>Время конца</th>
              </tr>
              </thead>
              <tbody>
              {getRows()}
              </tbody>
            </table>
          </div>
        </div>
        <div className="current-tri__item execution-journal">
          Журнал выполнения
        </div>
        <div className="current-tri__item current-tri__button-container">
          <button>Сохранить план ТРИ</button>
          <button>Удалить сеанс</button>
          <button>Работа по плану ТРИ</button>
        </div>
      </div>
    </ControlBlock>
  )
}

export default CurrentSessionTRI
