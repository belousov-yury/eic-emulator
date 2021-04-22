import React from "react"
import './CortexTablesParams.css'
import ControlBlock from "../ControlBlock";
import TableComponent from "../../../CustomComponents/TableComponent";

function CortexTablesParams() {

  const headers = ['id', 'Наименование параметра' , 'Значение']

  return(
    <ControlBlock title='Отображение параметров таблиц Cortex'>
      <div className="ctx-tables-params">
        <div className="ctx-tables-params__item change-table">
          <div>Таблица:</div>
          <select name="changeTable">
            <option value="0">???</option>
            <option value="1">???</option>
            <option value="2">???</option>
            <option value="3">???</option>
          </select>
        </div>
        <div className="ctx-tables-params__item">
          <TableComponent className='ctx-tables-params__table' headers={headers}/>
        </div>
      </div>
    </ControlBlock>
  )
}

export default CortexTablesParams
