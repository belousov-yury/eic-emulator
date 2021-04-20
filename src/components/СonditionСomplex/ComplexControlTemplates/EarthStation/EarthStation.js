import React from "react"
import ControlCenter from "./ControlCenter";
import MainSemiSetChange from "./MainSemiSetChange";
import LifeMark from "./LifeMark";
import ZSConfiguration from "./ZSConfiguration";
import StatusInquiry from "./StatusInquiry";
import SignalCharacteristic from "./SignalCharacteristic";
import OperatorMessage from "./OperatorMessage";

function EarthStation() {
  return(
    <div className='earth-station'>
      <ControlCenter />
      <MainSemiSetChange />
      <LifeMark />
      <ZSConfiguration />
      <StatusInquiry />
      <SignalCharacteristic />
      <OperatorMessage />
    </div>
  )
}

export default EarthStation