import React from "react"

import './ControlCenter.css'
import ControlBlock from "../ControlBlock";

function ControlCenter() {

  return (
    <ControlBlock title='Центр управления'>
      <div className='control-center'>
        <label className='control-center__item'>ЦУП<input type="radio" name='controlCenter'/></label>
        <label className='control-center__item'><input type="radio" name='controlCenter'/>РПУ</label>
      </div>
    </ControlBlock>
  )
}

export default ControlCenter