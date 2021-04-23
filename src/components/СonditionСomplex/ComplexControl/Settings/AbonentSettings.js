import React from "react"
import './AbonentSettings.css'
import ControlBlock from "../ControlBlock";
import IPInput from "../../../CustomComponents/IPInput";

function AbonentSettings() {
  return (
    <ControlBlock title='Настроки абонентов ЗС СКУ/ЗС РПУ'>
      <div className="abonent-settings">
        <div className="abonent-settings__table">

          <div className='table-cell table-cell__col-2'>IP-адрес</div>
          <div className='table-cell table-cell__col-3'>Порт</div>
          <div className='table-cell table-cell__col-4'>Абонент</div>

          <label><input type="checkbox" className='table-cell table-cell__col-1'/> [ЗС СКУ] АРМ 1:</label>
          <IPInput className='table-cell table-cell__col-2' defaultValue='0.0.0.0' onChange={ip => console.log(ip)}/>
          <input type="number" className='table-cell table-cell__col-3'/>
          <input type="number" className='table-cell table-cell__col-4'/>

          <label><input type="checkbox" className='table-cell table-cell__col-1'/> [ЗС СКУ] АРМ 2:</label>
          <IPInput className='table-cell table-cell__col-2' defaultValue='0.0.0.0' onChange={ip => console.log(ip)}/>
          <input type="number" className='table-cell table-cell__col-3'/>
          <input type="number" className='table-cell table-cell__col-4'/>

          <label><input type="checkbox" className='table-cell table-cell__col-1'/> [ЗС СКУ] АРМ 3:</label>
          <IPInput className='table-cell table-cell__col-2' defaultValue='0.0.0.0' onChange={ip => console.log(ip)}/>
          <input type="number" className='table-cell table-cell__col-3'/>
          <input type="number" className='table-cell table-cell__col-4'/>

          <label><input type="checkbox" className='table-cell table-cell__col-1'/> [ЗС СКУ] АРМ 4:</label>
          <IPInput className='table-cell table-cell__col-2' defaultValue='0.0.0.0' onChange={ip => console.log(ip)}/>
          <input type="number" className='table-cell table-cell__col-3'/>
          <input type="number" className='table-cell table-cell__col-4'/>
        </div>
        <div className="abonent-settings__item">
          <div>Обменная машина:</div>
          <input type="number"/>
        </div>
        <div className="abonent-settings__item">
          <div>№ космического аппарата:</div>
          <input type="number"/>
        </div>
      </div>
    </ControlBlock>
  )
}

export default AbonentSettings