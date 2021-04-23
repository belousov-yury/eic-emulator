import React, {useState} from "react"
import './TelReceptionParam.css'
import ControlBlock from "../ControlBlock";

function TelReceptionParam() {

  const [clients, setClients] = useState(5)
  return (
    <ControlBlock title='Параметры приема ТМИ'>
      <div className="tel-reception-param">
        <div className="tel-reception-param__item">
          <div>Состояние приема ТМИ:</div>
          <div>?????????????????????</div>
        </div>
        <div className="tel-reception-param__item">
          <div>Режим приема ТМИ-кадров:</div>
          <select name="TMIMode">
            <option value="0">Постоянная</option>
            <option value="1">Непостоянная</option>
          </select>
        </div>
        <div className="tel-reception-param__item">
          <div>Блок ТМИ:</div>
          <select name="TMIMode">
            <option value="0">А</option>
            <option value="1">Б</option>
          </select>
        </div>
        <div className="tel-reception-param__item">
          <div>Клиентов: {clients}</div>
          <input type="range" min='0' max='20'
                 value={clients}
                 onChange={e => setClients(e.target.value)}/>
        </div>
        <div className="tel-reception-param__item">
          <button>Остановить прием ТМИ</button>
          <button>Запуск приема ТМИ</button>
        </div>
        <div className='tel-reception-param__info'>
          <div>Дата/время приема ТМИ:</div>
          <textarea rows="14"/>
        </div>
      </div>
    </ControlBlock>
  )
}

export default TelReceptionParam