import React from "react"
import './ElevationCoordMeasurement.css'
import ControlBlock from "../ControlBlock";
import TableComponent from "../../../CustomComponents/TableComponent";

function ElevationCoordMeasurement() {

  const headers = ['КА', 'ЗС', 'Дата', 'Смещение, сек', 'Az, град.', 'El, град.']
  const rows = [
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
    {
      KA: 601,
      ZS: 'СКУ',
      date: '13.01.1995',
      displacement: 10,
      azimuth: 120,
      distance: 1000,
      speed: 100
    },
  ]

  return(
    <ControlBlock title='Измерение угломестных координат'>
      <div className="elev-coord-meas">
        <div className="elev-coord-meas__item elev-coord-meas__input-container">
          <div>Номер сеанса:</div>
          <input type="number"/>
        </div>
        <div className="elev-coord-meas__item elev-coord-meas__input-container">
          <div>Количество измерений:</div>
          <input type="number"/>
        </div>
        <div className="elev-coord-meas__item elev-coord-meas__input-container">
          <div>Интервал между измерениями:</div>
          <input type="number"/>
        </div>
        <div className="elev-coord-meas__item elev-coord-meas__request-button">
          <button>Заявка на проведение измерения углового положения КА</button>
        </div>
        <div className="elev-coord-meas__item elev-coord-meas__input-container">
          <div>Время выдачи заявки:</div>
          <div>????????????????????</div>
        </div>
        <div className="elev-coord-meas__item">
          <TableComponent className='elev-coord-meas__table' headers={headers} rows={rows}/>
        </div>
      </div>
    </ControlBlock>
  )
}

export default ElevationCoordMeasurement