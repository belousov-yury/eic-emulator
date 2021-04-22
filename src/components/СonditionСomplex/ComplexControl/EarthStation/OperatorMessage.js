import React from "react"
import './OperatorMessage.css'
import ControlBlock from "../ControlBlock";

function OperatorMessage() {
  return(
    <ControlBlock title="Сообщение оператору ЗС">
      <div className="operator-message">
        <div className="operator-message__item">
          <div className='operator-message__type-container'>
            <label><input type="radio" name='operator-message'/>Внимание</label>
            <label><input type="radio" name='operator-message'/>НСШ</label>
          </div>
        </div>
        <div className="operator-message__item">
          <div className='operator-message__text-container'>
            <input type="text"/>
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </ControlBlock>
  )
}

export default OperatorMessage