import React from "react";
import './App.css'
import ConditionComplex from "./СonditionСomplex/СonditionСomplex";
import ManagementPlan from "./ManagementPlan/ManagementPlan";
import ExchangeProtocol from "./ExchangeProtocol/ExchangeProtocol";

function App() {

  return (
    <div className={'app'}>
      <ConditionComplex/>
      <ManagementPlan/>
      <ExchangeProtocol/>
    </div>
  )
}

export default App