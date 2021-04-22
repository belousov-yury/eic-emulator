import React from 'react'
import './CurrentTD.css'
import ControlBlock from "../ControlBlock";
import TableComponent from "../../../CustomComponents/TableComponent";

function CurrentTD() {

  const data = {
    rows: [
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
    ],
    headers: ['КА', 'ЗС', 'Дата', 'Смещение, сек', 'Az, град.', 'Расстояние, км', 'Относит V, м/с']
  }

  return (
    <ControlBlock title='Текущие целеуказания'>
      <div className="current-td">
        <div className="current-td__item">
          <TableComponent rows={data.rows} headers={data.headers} className='current-td__table-container'/>
        </div>
        <div className="current-td__item">
          <div className="control-cur-td">
            <div className="control-cur-td__time-container">
              <div className="control-cur-td__time-title">
                Дата/время последней выдачи ЦУ на ЗС:
              </div>
              <div className="control-cur-td__time">
                ??.??.???? ??:??:??
              </div>
            </div>
          </div>
        </div>
        <div className="current-td__item">
          <div className="control-cur-td__button-container">
            <button>Сохранить</button>
            <button>Очистить</button>
            <button>Выдать на ЗС</button>
          </div>
        </div>
      </div>
    </ControlBlock>
  )
}

export default CurrentTD