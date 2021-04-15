import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ComplexControl.css'

function ComplexControl() {
  return(
    <div className={'complex-control'}>
      <Tabs className={'complex-control__content react-tabs'}>
        <TabList>
          <Tab>Земная станция</Tab>
          <Tab>Целеуказания</Tab>
          <Tab>План ТРИ</Tab>
          <Tab>Команды ТРИ</Tab>
          <Tab>Результаты измерений</Tab>
          <Tab>Cortex дальность</Tab>
          <Tab>Cortex мониторинг</Tab>
          <Tab>Cortex телекоманды</Tab>
          <Tab>Cortex телеметрия</Tab>
          <Tab>Cortex сброс портов</Tab>
          <Tab>Настройки</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5 Any content 5 Any content 5 Any content 5 Any content 5 Any content 5 Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ComplexControl