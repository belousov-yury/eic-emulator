import React, {useState} from "react";
import './ComplexInformation.css'

function ComplexInformation() {
  const data = useState('НД')
  return (
    <table className={'complex-information'}>
      <tr>
        <th></th>
        <th colSpan={2}>ЗС СКУ</th>
        <th colSpan={2}>ЗС РПУ</th>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>
          Сетевое подключение/статус:
        </td>
        <td>АРМ 1</td>
        <td>АРМ2</td>
        <td>АРМ 1</td>
        <td>АРМ 2</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Готовность ЗС:</td>
        <td colSpan={2}>{data}</td>
        <td colSpan={2}>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Готовность АС:</td>
        <td colSpan={2}>{data}</td>
        <td colSpan={2}>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние МШУ/Рез. МШУ:</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние УМ/Рез. УМ:</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние Конверторов Вверх/Рез.:</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние Конверторов Вниз/Рез.:</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние Матрицы ПРМ тракта:</td>
        <td colSpan={2}>{data}</td>
        <td colSpan={2}>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние Матрицы ПРД тракта:</td>
        <td colSpan={2}>{data}</td>
        <td colSpan={2}>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние Cortex:</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние Контроллера:</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние Тест-транслятора:</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>Состояние Доп. оборудования ЗС:</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>
      <tr>
        <td className={'complex-information__main-column'}>С/ш IFR Cortex/Сигнал АС:</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
        <td>{data}</td>
      </tr>

    </table>
  )
}

export default ComplexInformation