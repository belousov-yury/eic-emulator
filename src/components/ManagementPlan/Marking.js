import React from "react"

function Marking({direct}) {
  const coefficient = 100 / 24
  const linesArray = []

  const getStringTime = i => {
    const time = new Date()
    time.setHours(i)
    time.setMinutes(0)
    return ("0" + time.getHours()).slice(-2) + ':' + ("0" + time.getMinutes()).slice(-2)
  }

  for (let i = 0; i <= 24; i++) {
    if (i !== 0) {
      linesArray.push(
        <div key={i * coefficient - (coefficient / 2)}
             className='management-plan__line minLine'
             style={{[direct]: i * coefficient - (coefficient / 2) + '%'}}
        />
      )
    }
    linesArray.push(
      <div key={i * coefficient * 100}
           className='management-plan__line hourLine'
           style={{[direct]: i * coefficient + '%'}}/>
    )
    linesArray.push(
      <div key={i * coefficient - (coefficient / 2) * 1000}
           className='management-plan__time'
           style={{[direct]: i * coefficient - (coefficient / 2) + 2.16 + '%'}}
      >
        {getStringTime(i)}
      </div>
    )
  }
return linesArray
}

export default Marking