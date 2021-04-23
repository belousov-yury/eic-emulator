import React from "react"
import './Commands.css'
import ControlBlock from "../ControlBlock";

function Commands() {
  return(
    <ControlBlock title='Команды'>
      <div className="commands">
        <div className="commands__item">
          <div>Код запроса:</div>
          <input type="text"/>
        </div>
        <div className="commands__item">
          <div>Метка команды:</div>
          <input type="text"/>
        </div>
        <div className="commands__item">
          <div>Данные (HEX):</div>
          <textarea rows='3' />
        </div>
        <div className="commands__item">
          <button>Выполнить</button>
        </div>
        <div className="commands__item">
          <div>Время выдачи:</div>
          <div>?????</div>
        </div>
        <div className="commands__item">
          <div>Время квитанции:</div>
          <textarea rows='3' />
        </div>
      </div>
    </ControlBlock>
  )
}

export default Commands