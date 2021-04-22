import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './ComplexControl.css'
import {useTranslation} from "react-i18next"
import EarthStation from "./EarthStation/EarthStation";
import TargetDesignation from "./TargetDesignation/TargetDesignation";
import PlanTRI from "./PlanTRI/PlanTRI";
import CommandTRI from "./CommandTRI/CommandTRI";
import CortexRange from "./CortexRange/CortexRange";
import CortexMonitoring from "./CortexMonitoring/CortexMonitoring";

// import {useSelector} from "react-redux";

function ComplexControl() {

  const {t} = useTranslation()

  // const testVal = useSelector(state => state.complexInformation.SKU.antSystemReady)
  return(
    <div className={'complex-control'}>
      <Tabs className={'react-tabs'}>
        <TabList>
          <Tab>{t('interface.earthStation')}</Tab>
          <Tab>{t('interface.targetDesignation')}</Tab>
          <Tab>{t('interface.planTRI')}</Tab>
          <Tab>{t('interface.TRICommands')}</Tab>
          <Tab>{t('interface.measurementResults')}</Tab>
          <Tab>{t('interface.cortexRange')}</Tab>
          <Tab>{t('interface.cortexMonitoring')}</Tab>
          <Tab>{t('interface.cortexTelecommands')}</Tab>
          <Tab>{t('interface.cortexTelemetry')}</Tab>
          <Tab>{t('interface.cortexResetPorts')}</Tab>
          <Tab>{t('interface.settings')}</Tab>
        </TabList>

        <TabPanel>
          <EarthStation />
        </TabPanel>
        <TabPanel>
          <TargetDesignation />
        </TabPanel>
        <TabPanel>
          <PlanTRI/>
        </TabPanel>
        <TabPanel>
          <CommandTRI />
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
          <CortexRange />
        </TabPanel>
        <TabPanel>
          <CortexMonitoring />
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