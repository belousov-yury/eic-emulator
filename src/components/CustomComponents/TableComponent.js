import React from "react"
import './TableComponent.css'

function TableComponent({rows, headers, className}) {

  const getHeaders = () => {
    if (!headers) return null
    return headers.map((header, index) => <th key={index}>{header}</th>)
  }
  const getRows = () => {
    if (!rows) return null
    const rowsTemplates = rows.map((item, index) => {
        const newTdList = Object.values(item).map((val, i) => <td key={i}>{val}</td>)
        return (
          <tr key={index}>{newTdList}</tr>
        )
      }
    )
    return rowsTemplates
  }

  return (
    <div className={'custom-table-container ' + className} >
      <table className="custom-table">
        <thead>
        <tr>
          {getHeaders()}
        </tr>
        </thead>
        <tbody>
        {getRows()}
        </tbody>
      </table>
    </div>

  )

}

export default TableComponent