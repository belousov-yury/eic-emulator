import React from "react"
import './Settings.css'

import AbonentSettings from "./AbonentSettings";
import CortexBlockSettings from "./CortexBlockSettings";

function Settings() {
  return(
    <div className='settings'>
      <AbonentSettings />
      <CortexBlockSettings />
      <button className='settings__button'>Применить</button>
    </div>
  )
}

export default Settings