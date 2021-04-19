import React from "react"
import ControlBlock from "./ControlBlock";
import './MainSemiSetChange.css'

function MainSemiSetChange() {
  return (
    <ControlBlock title='Выбор основного полукомплекта'>
      <div className='main-semi-set'>
        <label className='main-semi-set__item'><input type="radio" name='mainSemiSet'/>АРМ1</label>
        <label className='main-semi-set__item'><input type="radio" name='mainSemiSet'/>АРМ2</label>
        <button className='main-semi-set__item'><p className='main-semi-set__button-text'>АРМ 1/2 Осн.</p></button>
        <button className='main-semi-set__item'><p className='main-semi-set__button-text'>АРМ 1/2 Рез.</p></button>
      </div>
    </ControlBlock>
  )
}

export default MainSemiSetChange