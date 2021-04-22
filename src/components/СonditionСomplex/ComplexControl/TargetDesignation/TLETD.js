import React from "react"
import './TLETD.css'
import ControlBlock from "../ControlBlock";

function TLETD() {
  return(
    <ControlBlock title='Целеуказания TLE'>
      <div className="tle">
        <div className="tle__item">
            <input className="tle__file-input" type="file" accept=".tle"/>
        </div>
        <div className="tle__item">

        </div>
        <div className="tle__item">
          <button className='tle__button'>Выдать TLE на ЗС</button>
        </div>
        <div className="tle__item">
          <div className="tle__datetime-container">
            <div>Дата/время выдачи TLE:</div>
            <div>???</div>
            <div>Дата/время квитанции:</div>
            <div>???</div>
          </div>
        </div>
      </div>
    </ControlBlock>
  )
}

export default TLETD