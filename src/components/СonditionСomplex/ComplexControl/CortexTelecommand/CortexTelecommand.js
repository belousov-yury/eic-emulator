import React from "react"
import PortControl from "./PortControl";
import CommandInfoRate from "./CommandInfoRate";
import PortControlInstructions from "./PortControlInstructions";
import Commands from "./Commands";


function CortexTelecommand() {
  return(
    <div>
      <PortControl />
      <CommandInfoRate />
      <PortControlInstructions />
      <Commands />
    </div>
  )

}

export default CortexTelecommand