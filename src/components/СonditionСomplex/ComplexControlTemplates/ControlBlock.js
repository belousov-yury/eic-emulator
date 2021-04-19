import React from "react"
import './ControlBlock.css'

function ControlBlock(props) {
  return(
    <fieldset className={'control-block ' + props.className}>
      <legend className={'control-block__legend'}>
        {props.title}
      </legend>
      {props.children}
    </fieldset>

  )
}

export default ControlBlock