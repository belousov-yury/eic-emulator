import React from "react"

function CurrentTimeLine({direct, currentTime, customRef}) {

  const getStringTime = currentTime => {
    const time = new Date()
    time.setHours(currentTime)
    return <div>{("0" + time.getHours()).slice(-2) + ':' + ("0" + time.getMinutes()).slice(-2)}</div>
  }

  return(
    <div className='management-plan__line current-time-line'
         style={{[direct]: 100 / 24 * currentTime + '%'}}
         ref={customRef}
    >
      {getStringTime(currentTime)}
    </div>
  )
}

export default CurrentTimeLine