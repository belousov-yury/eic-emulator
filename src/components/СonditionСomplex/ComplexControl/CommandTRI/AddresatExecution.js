import React from "react"
import './AddresatExecution.css'
import ControlBlock from "../ControlBlock";

function AddresatExecution() {
  return(
    <ControlBlock title='Адресат выполнения'>
      <div className='addr-execut'>
        <label>
          АРМ:
          <select name="addressat" id="">
            <option value="0">По текущей конфигурации</option>
            <option value="0">По текущей конфигурации</option>
            <option value="0">По текущей конфигурации</option>
            <option value="0">По текущей конфигурации</option>
            <option value="0">По текущей конфигурации</option>
          </select>
        </label>
      </div>
    </ControlBlock>
  )

}

export default AddresatExecution