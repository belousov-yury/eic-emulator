import React from "react";
import './СonditionСomplex.css'
import ComplexInformation from "./ComplexInformation";
import ComplexControl from "./ComplexControl";

function ConditionComplex() {
  return (
    <fieldset className={'condition-complex'}>
      <legend>
        Общая информаци о состоянии комплекса
      </legend>
      <ComplexInformation/>
      <ComplexControl/>
    </fieldset>
  )
}

export default ConditionComplex