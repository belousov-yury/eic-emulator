import React from "react";
import {useSelector} from 'react-redux'
import './ComplexInformation.css'
import {useTranslation} from 'react-i18next'
// import {testAction} from "../../redux/actions";

const ComplexInformation = () => {

  // const dispatch = useDispatch()
  const { t } = useTranslation()
  const complexInformation = useSelector(state => state.complexInformation)

  // const handleUpdateTestValue = (e) =>{
  //   dispatch(testAction(e.target.value))
  // }

  function getComplexInformationTemplate(data) {
    if (!('SKU' in data)) return <tr><td colSpan={5}>Данных нет</td></tr>

    const template = []

    for (let i in data.SKU) {
      if (i !== 'ARM1' && i !== 'ARM2') {
        template.push(
          <tr key={i}>
            <td className={'complex-information__main-column'}>{t('complexInformation.' + i) + ':'}</td>
            <td colSpan={2}>{data.SKU[i]}</td>
            <td colSpan={2}>{data.RPU[i]}</td>
          </tr>
        )
      }
    }

    for (let key in data.SKU.ARM1) {
      template.push(
        <tr key={key}>
          <td className={'complex-information__main-column'}>{t('complexInformation.' + key) + ':'}</td>
          <td>{data.SKU.ARM1[key]}</td>
          <td>{data.SKU.ARM2[key]}</td>
          <td>{data.RPU.ARM1[key]}</td>
          <td>{data.RPU.ARM2[key]}</td>
        </tr>
      )
    }
    return template
  }

  return (
    <table className={'complex-information'}>
      <thead>
      <tr>
        <th></th>
        <th colSpan={2}>ЗС СКУ</th>
        <th colSpan={2}>ЗС РПУ</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td className={'complex-information__main-column'}>
          Сетевое подключение/статус:
        </td>
        <td>АРМ 1</td>
        <td>АРМ 2</td>
        <td>АРМ 1</td>
        <td>АРМ 2</td>
      </tr>
      {getComplexInformationTemplate(complexInformation)}
      </tbody>
    </table>
  )
}

export default ComplexInformation